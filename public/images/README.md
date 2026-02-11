# 📁 Cấu trúc thư mục hình ảnh

## 📂 Cấu trúc hiện tại

```
public/images/
├── apps/
│   ├── netflix/
│   │   ├── logo.png              # Logo chính (image field)
│   │   ├── screenshot-1.jpg      # Screenshot 1 (images array)
│   │   ├── screenshot-2.jpg      # Screenshot 2
│   │   ├── screenshot-3.jpg      # Screenshot 3
│   │   └── feature-*.jpg         # Feature images
│   │
│   ├── disney-plus/
│   │   └── ... (tương tự)
│   │
│   └── [other-app-slugs]/
│
└── devices/
    ├── roku/
    │   ├── product.png           # Hình sản phẩm chính (image field)
    │   ├── angle-front.jpg       # Góc nhìn phía trước (images array)
    │   ├── angle-back.jpg        # Góc nhìn phía sau
    │   ├── remote.jpg            # Remote control
    │   └── in-use.jpg           # Sản phẩm trong môi trường sử dụng
    │
    ├── apple-tv/
    │   └── ... (tương tự)
    │
    └── [other-device-slugs]/
```

## 📝 Quy tắc đặt tên

### Apps (Streaming Services)
- `logo.png` - Logo chính, dùng cho `image` field
- `screenshot-{number}.jpg` - Screenshots UI (1, 2, 3, ...)
- `feature-{name}.jpg` - Hình ảnh tính năng cụ thể (4k, download, profiles, ...)

### Devices
- `product.png` - Hình sản phẩm chính, dùng cho `image` field
- `angle-{position}.jpg` - Góc nhìn (front, back, side, top)
- `{accessory}.jpg` - Phụ kiện (remote, controller, cable)
- `in-use.jpg` - Sản phẩm đang được sử dụng
- `packaging.jpg` - Hộp đóng gói

## 🎯 Kích thước khuyến nghị

| Loại | Kích thước | Tỷ lệ | Format | Dung lượng |
|------|-----------|-------|---------|-----------|
| Logo | 512x512px | 1:1 | PNG | < 50KB |
| Screenshot | 1920x1080px | 16:9 | JPG/WebP | < 200KB |
| Product | 1200x1200px | 1:1 | PNG | < 150KB |
| Feature | 1280x720px | 16:9 | JPG | < 150KB |

## ⚙️ Tối ưu hóa

### Before upload:
1. Resize về đúng kích thước
2. Compress với TinyPNG hoặc Squoosh
3. Convert sang WebP nếu có thể
4. Remove metadata

### Tools:
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim**: https://imageoptim.com (Mac)

## 📍 Cách sử dụng trong code

### 1. Cập nhật data in apps.ts
```typescript
{
  slug: "netflix",
  name: "Netflix",
  icon: "🎬",
  image: "/images/apps/netflix/logo.png",      // ← Logo chính
  images: [                                       // ← Gallery
    "/images/apps/netflix/screenshot-1.jpg",
    "/images/apps/netflix/screenshot-2.jpg",
    "/images/apps/netflix/screenshot-3.jpg",
  ],
  // ... other fields
}
```

### 2. Hiển thị trong TSX
```tsx
import EnhancedImageGallery from "@/components/EnhancedImageGallery";

{app.images && (
  <EnhancedImageGallery images={app.images} alt={app.name} />
)}
```

## 🔍 Tìm hình ảnh

### Logo services:
- **Brandfetch**: https://brandfetch.com
- **Clearbit**: https://clearbit.com/logo
- **Logo.dev**: https://logo.dev

### Screenshots:
- Tự chụp từ website/app chính thức
- Sử dụng browser dev tools để responsive
- Resolution: 1920x1080 (Full HD)

### Product images:
- Từ website chính thức của nhà sản xuất
- Press kits
- Product pages trên Amazon

## ✅ Checklist

Khi thêm một app/device mới:

- [ ] Tạo thư mục `/images/apps/{slug}` hoặc `/images/devices/{slug}`
- [ ] Download/chuẩn bị logo chính (logo.png hoặc product.png)
- [ ] Download 3-5 screenshots/product images
- [ ] Tối ưu hóa tất cả images (resize, compress)
- [ ] Đặt vào thư mục với đúng tên file
- [ ] Cập nhật data trong apps.ts hoặc devices.ts
- [ ] Test hiển thị trên trang detail

## 🚀 Next.js Image Optimization

Next.js tự động tối ưu hóa images khi sử dụng `<Image>` component:
- ✅ Auto WebP conversion
- ✅ Lazy loading
- ✅ Responsive sizes
- ✅ Blur placeholder

Không cần lo lắng về performance khi dùng đúng Next.js Image component!
