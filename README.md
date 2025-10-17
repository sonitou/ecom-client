# ECommerce Frontend

Giao diện frontend cho nền tảng thương mại điện tử được xây dựng với Next.js 15, TypeScript, và Tailwind CSS.

## 🚀 Tính năng chính

### 🔐 Authentication & Authorization

-   **HttpOnly Cookie Authentication**: Bảo mật cao với cookies không thể truy cập từ JavaScript
-   **Automatic Token Refresh**: Tự động làm mới token khi hết hạn
-   **Route Protection**: Bảo vệ các route yêu cầu xác thực
-   **2FA Support**: Hỗ trợ xác thực 2 yếu tố
-   **OTP Verification**: Xác thực bằng mã OTP

### 🛍️ E-commerce Features

-   **Product Catalog**: Danh sách sản phẩm với tìm kiếm và lọc
-   **Product Details**: Chi tiết sản phẩm với hình ảnh và thông tin đầy đủ
-   **Category Management**: Quản lý danh mục sản phẩm
-   **Shopping Cart**: Giỏ hàng (sắp tới)
-   **Wishlist**: Danh sách yêu thích (sắp tới)
-   **Order Management**: Quản lý đơn hàng (sắp tới)

### 🎨 UI/UX

-   **Responsive Design**: Thiết kế tương thích mọi thiết bị
-   **Modern UI**: Giao diện hiện đại với Shadcn UI
-   **Dark/Light Mode**: Chế độ sáng/tối (sắp tới)
-   **Accessibility**: Hỗ trợ người dùng khuyết tật
-   **Performance**: Tối ưu hiệu suất với Next.js 15

## 🏗️ Cấu trúc dự án

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes group
│   │   ├── login/         # Login page
│   │   └── register/      # Register page
│   ├── products/          # Product pages
│   │   └── [id]/         # Product detail page
│   ├── categories/        # Category pages
│   ├── profile/           # User profile page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Site header
│   │   └── Footer.tsx    # Site footer
│   ├── forms/            # Form components
│   │   ├── LoginForm.tsx # Login form
│   │   └── RegisterForm.tsx # Register form
│   ├── product/          # Product components
│   │   ├── ProductCard.tsx # Product card
│   │   └── ProductList.tsx # Product list
│   ├── category/         # Category components
│   │   └── CategoryCard.tsx # Category card
│   └── ui/               # Base UI components
├── hooks/                # Custom React hooks
│   ├── useAuth.ts        # Authentication hook
│   ├── useProducts.ts    # Products hook
│   └── useCategories.ts  # Categories hook
├── lib/                  # Utility libraries
│   ├── api/              # API client
│   │   ├── base.ts       # Base API client
│   │   ├── auth.ts       # Auth API
│   │   ├── products.ts   # Products API
│   │   └── categories.ts # Categories API
│   └── utils.ts          # Utility functions
├── types/                # TypeScript type definitions
│   └── index.ts          # Global types
├── config/               # Configuration
│   └── env.ts            # Environment config
└── middleware.ts         # Next.js middleware
```

## 🛠️ Công nghệ sử dụng

### Core

-   **Next.js 15**: React framework với App Router
-   **TypeScript**: Type-safe JavaScript
-   **React 19**: UI library với concurrent features

### Styling

-   **Tailwind CSS**: Utility-first CSS framework
-   **Shadcn UI**: Component library
-   **Lucide React**: Icon library

### State Management

-   **React Hooks**: Built-in state management
-   **Custom Hooks**: Reusable state logic

### API & Data

-   **Fetch API**: HTTP client
-   **HttpOnly Cookies**: Secure authentication
-   **Zod**: Schema validation

### Development

-   **ESLint**: Code linting
-   **Prettier**: Code formatting
-   **TypeScript**: Static type checking

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống

-   Node.js 18+
-   npm hoặc yarn
-   Backend API đang chạy

### Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd client-ecom/client

# Cài đặt dependencies
npm install

# Tạo file environment
cp .env.example .env.local

# Cấu hình environment variables
# NEXT_PUBLIC_API_URL=http://localhost:4000
# NEXT_PUBLIC_URL=http://localhost:3000
```

### Chạy development

```bash
npm run dev
```

Truy cập http://localhost:3000

### Build production

```bash
npm run build
npm start
```

## 🔧 Cấu hình

### Environment Variables

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_URL=http://localhost:3000

# App Configuration
NEXT_PUBLIC_APP_NAME=ECommerce
NEXT_PUBLIC_APP_DESCRIPTION=Nền tảng mua sắm trực tuyến
```

### API Integration

Dự án được thiết kế để tích hợp với NestJS backend:

-   **Base URL**: Cấu hình trong `src/config/env.ts`
-   **Authentication**: HttpOnly cookies
-   **Error Handling**: Centralized error handling
-   **Type Safety**: Full TypeScript support

## 📱 Responsive Design

Dự án hỗ trợ đầy đủ responsive design:

-   **Mobile**: 320px - 768px
-   **Tablet**: 768px - 1024px
-   **Desktop**: 1024px+

## 🔒 Bảo mật

### Authentication

-   **HttpOnly Cookies**: Tokens không thể truy cập từ JavaScript
-   **Automatic Refresh**: Tự động làm mới token
-   **CSRF Protection**: SameSite cookie attribute
-   **XSS Protection**: Content Security Policy

### Data Validation

-   **Zod Schemas**: Runtime type validation
-   **TypeScript**: Compile-time type checking
-   **Input Sanitization**: XSS prevention

## 🧪 Testing

```bash
# Chạy tests
npm run test

# Chạy tests với coverage
npm run test:coverage

# Chạy tests trong watch mode
npm run test:watch
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

-   **Email**: support@ecommerce.com
-   **Documentation**: [Link to docs]
-   **Issues**: [GitHub Issues]

## 🔄 Changelog

### v1.0.0 (2025-01-27)

-   ✨ Initial release
-   🔐 HttpOnly Cookie authentication
-   🛍️ Product catalog and details
-   📱 Responsive design
-   🎨 Modern UI with Shadcn
-   ⚡ Next.js 15 with App Router
