# 🏆 Playwright Automation Framework

This is a **Playwright** test automation framework that supports multiple environments. It follows the **Page Object Model (POM)** for better maintainability.

---

## 🚀 **Features**
- ✅ **Environment-Specific Configurations** via `config.js`
- ✅ **Page Object Model (POM)**
- ✅ **Parallel Execution Support**
- ✅ **HTML Reports with playwright report**

---

## ⚙️ **Setup & Installation**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/playwrigh-framework.git
cd playwright-framework
```

```sh
npm install
```

## Run Tests for Test Environment
```
npx playwright test --env=test
```

## Run Tests for Production Environment
```
npx playwright test --env=prod
```

## Run Tests in Headless Mode
```
npx playwright test --headless
```

## Run Tests in Headed Mode
```
npx playwright test --headed
```

## Run Tests in UI Mode
```
npx playwright test --ui
```
