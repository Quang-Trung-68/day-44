# React Advanced Patterns - Auto Refresh Token & Component Patterns

## 📋 Mô tả

Dự án React Redux Toolkit demo các kỹ thuật nâng cao: xử lý auto refresh token, Higher-Order Component (HOC), và Render Props pattern.

## 🚀🚀 Xem demo

[Xem demo](https://day-43.vercel.app/)

## 🎯 Tính năng chính

### 1. Auto Refresh Token

- Tự động làm mới access token khi hết hạn (1 phút)
- Queue management cho multiple concurrent requests
- Xử lý refresh token thất bại, redirect về login
- Interceptor trong `httpRequest.js` với axios

### 2. Higher-Order Component (HOC)

- `withLoading`: HOC bọc component với loading state
- Demo page `/hoc-demo` với:
  - UserProfile: hiển thị thông tin user từ API
  - ProductList: danh sách sản phẩm
  - Toggle loading states độc lập

### 3. Render Props Pattern

- `DataFetcher`: component fetch data với render props
- Demo page `/render-props-demo`:
  - Posts list từ JSONPlaceholder API
  - Users list với error/loading handling
  - Tái sử dụng logic fetch cho nhiều endpoint

## 🚀 Cài đặt

```bash
npm install
npm run dev
```

## 🔑 API Endpoints

- Login: `POST /auth/login`
- Refresh: `POST /auth/refresh-token`
- Me: `GET /auth/me`
- Products: `GET /products`
