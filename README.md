# React Advanced Techniques Demo

Demo các kỹ thuật nâng cao: prop `key`, code splitting, error boundary, và utility functions.

## 🚀 Demo

[Xem demo](https://day-44-eta.vercel.app/)

## 🚀 Tính năng chính

### 1. Prop `key` - Reset Component State

**3 cách reset state:**

```jsx
// Cách 1: Thay đổi key (Khuyến nghị)
<CounterComponent key={random} />;

// Cách 2: useEffect với prop
useEffect(() => setCount(0), [reset]);

// Cách 3: useImperativeHandle
counterRef.current.reset();
```

**Drag & Drop:**

```jsx
<ReactSortable list={posts} setList={setPosts}>
  {posts.map((post) => (
    <div key={post.id}>{post.title}</div>
  ))}
</ReactSortable>
```

**Best practices:**

- ✅ Dùng ID duy nhất: `key={item.id}`
- ❌ Tránh index khi list thay đổi
- ❌ Tránh giá trị random

### 2. Cắt tiêu đề theo từ

```javascript
// utils/string.js
export function truncateByWords(str, numWords) {
  if (!str) return "";
  const words = str.trim().split(/\s+/);
  if (words.length <= numWords) return str;
  return words.slice(0, numWords).join(" ") + "...";
}

// Sử dụng
<h3>{truncateByWords(post.title, 10)}</h3>;
```

### 3. Code Splitting

```jsx
// App.jsx
import { Suspense, lazy } from "react";

const PropKey = React.lazy(() => import("./pages/PropKey"));
const Counter = React.lazy(() => import("./pages/Counter"));
const Sentry = React.lazy(() => import("./pages/Sentry"));
const TestError = React.lazy(() => import("./pages/TestError"));

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/prop-key" element={<PropKey />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/test-error" element={<TestError />} />
        <Route path="/sentry" element={<Sentry />} />
      </Routes>
    </Suspense>
  );
}
```

**Lợi ích:** Giảm bundle size, tải component khi cần, tăng tốc tải trang.

### 4. Error Boundary

```jsx
// ErrorBoundary.jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) return <ErrorUI />;
    return this.props.children;
  }
}

// main.jsx
<ErrorBoundary>
  <App />
</ErrorBoundary>;
```

**Tích hợp Sentry:**

```jsx
Sentry.init({ dsn: "your-dsn" });
```

## 📦 Cài đặt

```bash
npm install
npm run dev
```

## 🛠️ Tech Stack

React 19, Redux Toolkit, React Router, Sentry, Vite, Tailwind CSS

## 📁 Cấu trúc

```
src/
├── components/    # ErrorBoundary, LoadingFallback
├── pages/         # Home, PropKey, Counter
├── utils/         # string.js, httpRequest.js
└── services/      # API services
```
