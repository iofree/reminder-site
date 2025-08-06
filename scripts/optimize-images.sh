#!/bin/bash

# 图片优化脚本
# 使用 macOS 内置的 sips 命令进行图片压缩

echo "开始优化图片..."

# 优化 assets 目录下的所有图片
echo "优化 assets 目录下的图片..."

# 获取优化前的总大小
echo "优化前图片总大小:"
find assets -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | xargs du -ch | tail -1

find assets -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | while read img; do
    echo "优化: $img"
    
    # 获取原始文件大小
    original_size=$(stat -f%z "$img")
    
    # 备份原文件
    cp "$img" "$img.backup"
    
    # 根据文件大小选择不同的压缩策略
    if [ $original_size -gt 1048576 ]; then  # 大于1MB
        echo "  大文件，使用高压缩率..."
        # 对于大文件，降低质量到60%并调整尺寸
        sips -s format jpeg -s formatOptions 60 "$img" --out "${img%.*}_temp.jpg" 2>/dev/null
        if [ -f "${img%.*}_temp.jpg" ]; then
            mv "${img%.*}_temp.jpg" "$img"
        fi
    elif [ $original_size -gt 524288 ]; then  # 大于512KB
        echo "  中等文件，使用中等压缩率..."
        # 对于中等文件，降低质量到75%
        sips -s format jpeg -s formatOptions 75 "$img" --out "${img%.*}_temp.jpg" 2>/dev/null
        if [ -f "${img%.*}_temp.jpg" ]; then
            mv "${img%.*}_temp.jpg" "$img"
        fi
    else
        echo "  小文件，使用轻度压缩..."
        # 对于小文件，只进行轻度优化
        sips -s format png "$img" --out "${img%.*}_temp.png" 2>/dev/null
        if [ -f "${img%.*}_temp.png" ]; then
            mv "${img%.*}_temp.png" "$img"
        fi
    fi
    
    # 显示压缩结果
    new_size=$(stat -f%z "$img")
    saved=$((original_size - new_size))
    if [ $saved -gt 0 ]; then
        echo "  压缩成功: $(numfmt --to=iec $original_size) -> $(numfmt --to=iec $new_size) (节省 $(numfmt --to=iec $saved))"
    else
        echo "  文件已经很小，无需压缩"
    fi
done

echo ""
echo "优化后图片总大小:"
find assets -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | xargs du -ch | tail -1

echo ""
echo "图片优化完成！"
echo "如果需要恢复原图片，可以使用 .backup 文件"