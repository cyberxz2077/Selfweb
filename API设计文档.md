# 黄鑫哲个人品牌网站 - API 设计文档 v1.0

## 一、API 概述

### 1.1 API 设计原则

| 原则 | 说明 |
|-----|------|
| **RESTful** | 遵循 RESTful 设计规范 |
| **版本控制** | API 路径包含版本号 |
| **统一响应** | 统一的响应格式 |
| **错误处理** | 统一的错误码和错误信息 |
| **认证授权** | JWT Token 认证 |
| **限流保护** | 防止 API 滥用 |

### 1.2 API 基础信息

| 项目 | 值 |
|-----|------|
| **Base URL** | `https://api.huangxinzhe.com/v1` |
| **Content-Type** | `application/json` |
| **认证方式** | Bearer Token |
| **数据格式** | JSON |

---

## 二、API 端点设计

### 2.1 项目 API

#### 2.1.1 获取项目列表

**Endpoint**: `GET /projects`

**描述**: 获取所有活跃的项目列表

**请求参数**：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|-----|------|------|--------|------|
| `limit` | `number` | ❌ | `10` | 每页数量 |
| `offset` | `number` | ❌ | `0` | 偏移量 |
| `type` | `string` | ❌ | - | 项目类型过滤 |

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "id": "uuid",
        "name": "Claw OS",
        "slug": "claw-os",
        "description": "本地个人AI操作系统...",
        "shortDescription": "Local-First个人AI操作系统...",
        "type": "AI产品",
        "techStack": ["OpenClaw", "RAG", "Vector DB"],
        "role": "创始人",
        "url": "https://github.com/...",
        "demoUrl": null,
        "bpUrl": null,
        "thumbnailUrl": "/images/projects/claw-os-thumb.png",
        "screenshots": ["/images/projects/claw-os-1.png"],
        "status": "active",
        "sortOrder": 0,
        "createdAt": "2026-03-01T12:00:00Z",
        "updatedAt": "2026-03-01T12:00:00Z"
      }
    ],
    "total": 3,
    "limit": 10,
    "offset": 0
  }
}
```

**错误响应**：

| 错误码 | 说明 |
|-------|------|
| `400` | 请求参数错误 |
| `500` | 服务器内部错误 |

---

#### 2.1.2 获取单个项目

**Endpoint**: `GET /projects/{slug}`

**描述**: 根据 slug 获取单个项目详情

**路径参数**：

| 参数 | 类型 | 必填 | 说明 |
|-----|------|------|------|
| `slug` | `string` | ✅ | 项目 slug |

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "uuid",
    "name": "Claw OS",
    "slug": "claw-os",
    "description": "本地个人AI操作系统...",
    "shortDescription": "Local-First个人AI操作系统...",
    "type": "AI产品",
    "techStack": ["OpenClaw", "RAG", "Vector DB"],
    "role": "创始人",
    "url": "https://github.com/...",
    "demoUrl": null,
    "bpUrl": null,
    "thumbnailUrl": "/images/projects/claw-os-thumb.png",
    "screenshots": ["/images/projects/claw-os-1.png", "/images/projects/claw-os-2.png"],
    "status": "active",
    "sortOrder": 0,
    "createdAt": "2026-03-01T12:00:00Z",
    "updatedAt": "2026-03-01T12:00:00Z"
  }
}
```

**错误响应**：

| 错误码 | 说明 |
|-------|------|
| `404` | 项目不存在 |
| `500` | 服务器内部错误 |

---

### 2.2 文章 API

#### 2.2.1 获取文章列表

**Endpoint**: `GET /articles`

**描述**: 获取所有已发布的文章列表

**请求参数**：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|-----|------|------|--------|------|
| `limit` | `number` | ❌ | `10` | 每页数量 |
| `offset` | `number` | ❌ | `0` | 偏移量 |
| `tag` | `string` | ❌ | - | 标签过滤 |
| `sortBy` | `string` | ❌ | `publishedAt` | 排序字段 |
| `sortOrder` | `string` | ❌ | `desc` | 排序方向（asc/desc） |

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "id": "uuid",
        "title": "AI Agent的下一个形态",
        "slug": "ai-agent-next-evolution",
        "content": "# AI Agent的下一个形态...",
        "excerpt": "当我对AI Agent的理解发生了新的变化...",
        "tags": ["AI产品", "思考"],
        "publishedAt": "2026-03-02T12:00:00Z",
        "status": "published",
        "version": "v260302.1",
        "createdAt": "2026-03-02T12:00:00Z",
        "updatedAt": "2026-03-02T12:00:00Z"
      }
    ],
    "total": 3,
    "limit": 10,
    "offset": 0
  }
}
```

**错误响应**：

| 错误码 | 说明 |
|-------|------|
| `400` | 请求参数错误 |
| `500` | 服务器内部错误 |

---

#### 2.2.2 获取单篇文章

**Endpoint**: `GET /articles/{slug}`

**描述**: 根据 slug 获取单篇文章详情

**路径参数**：

| 参数 | 类型 | 必填 | 说明 |
|-----|------|------|------|
| `slug` | `string` | ✅ | 文章 slug |

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "uuid",
    "title": "AI Agent的下一个形态",
    "slug": "ai-agent-next-evolution",
    "content": "# AI Agent的下一个形态\n\n## 引言\n\n当我对AI Agent的理解发生了新的变化...\n\n## 核心观点\n\n1. **认知升级**：从工具到伙伴\n2. **架构演进**：从单体到网络\n3. **交互革命**：从命令到对话\n\n## 未来展望\n\n...\n\n## 结语\n\n...",
    "excerpt": "当我对AI Agent的理解发生了新的变化...",
    "tags": ["AI产品", "思考"],
    "publishedAt": "2026-03-02T12:00:00Z",
    "status": "published",
    "version": "v260302.1",
    "createdAt": "2026-03-02T12:00:00Z",
    "updatedAt": "2026-03-02T12:00:00Z"
  }
}
```

**错误响应**：

| 错误码 | 说明 |
|-------|------|
| `404` | 文章不存在 |
| `500` | 服务器内部错误 |

---

### 2.3 经历 API

#### 2.3.1 获取经历列表

**Endpoint**: `GET /experiences`

**描述**: 获取所有经历列表

**请求参数**：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|-----|------|------|--------|------|
| `limit` | `number` | ❌ | `10` | 每页数量 |
| `offset` | `number` | ❌ | `0` | 偏移量 |
| `type` | `string` | ❌ | - | 经历类型过滤 |

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "id": "uuid",
        "title": "AI创业者",
        "subtitle": "连续创业 / 智慧养老 / 智慧文旅 / AI-Native应用",
        "company": null,
        "startDate": "2025-01-01",
        "endDate": null,
        "description": "从0到1搭建AI创业服务平台...",
        "location": "杭州",
        "type": "工作",
        "sortOrder": 0,
        "createdAt": "2026-03-01T12:00:00Z",
        "updatedAt": "2026-03-01T12:00:00Z"
      }
    ],
    "total": 5,
    "limit": 10,
    "offset": 0
  }
}
```

**错误响应**：

| 错误码 | 说明 |
|-------|------|
| `400` | 请求参数错误 |
| `500` | 服务器内部错误 |

---

### 2.4 技能 API

#### 2.4.1 获取技能列表

**Endpoint**: `GET /skills`

**描述**: 获取所有技能列表

**请求参数**：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|-----|------|------|--------|------|
| `limit` | `number` | ❌ | `10` | 每页数量 |
| `offset` | `number` | ❌ | `0` | 偏移量 |
| `category` | `string` | ❌ | - | 技能分类过滤 |

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "id": "uuid",
        "name": "ChatGPT",
        "category": "AI工具",
        "level": "expert",
        "sortOrder": 0,
        "createdAt": "2026-03-01T12:00:00Z",
        "updatedAt": "2026-03-01T12:00:00Z"
      }
    ],
    "total": 20,
    "limit": 10,
    "offset": 0
  }
}
```

**错误响应**：

| 错误码 | 说明 |
|-------|------|
| `400` | 请求参数错误 |
| `500` | 服务器内部错误 |

---

### 2.5 设置 API

#### 2.5.1 获取网站设置

**Endpoint**: `GET /settings`

**描述**: 获取网站全局设置

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "hero": {
      "title": "黄鑫哲",
      "subtitle": "AI Product Manager",
      "description": "7年产品经理经验 | 独立开发过AI产品 | 正在寻找杭州/上海的机会"
    },
    "navbar": {
      "links": [
        {"name": "首页", "href": "/"},
        {"name": "项目", "href": "/projects"},
        {"name": "关于我", "href": "/about"},
        {"name": "未来展望", "href": "/thoughts"},
        {"name": "联系方式", "href": "/contact"}
      ]
    },
    "footer": {
      "copyright": "© 2026 黄鑫哲. All rights reserved.",
      "location": "杭州",
      "message": "Always building something new."
    },
    "social": {
      "github": "https://github.com/your-username",
      "linkedin": "https://linkedin.com/in/your-profile",
      "email": "Cyberxz2077@gmail.com",
      "phone": "13142263877",
      "wechat": "Hi_Cortana"
    }
  }
}
```

**错误响应**：

| 错误码 | 说明 |
|-------|------|
| `500` | 服务器内部错误 |

---

## 三、API 响应格式

### 3.1 成功响应

```json
{
  "code": 200,
  "message": "success",
  "data": {}
}
```

### 3.2 错误响应

```json
{
  "code": 400,
  "message": "Bad Request",
  "error": {
    "field": "参数名",
    "message": "参数错误详情"
  }
}
```

### 3.3 错误码列表

| 错误码 | 说明 |
|-------|------|
| `200` | 成功 |
| `400` | 请求参数错误 |
| `401` | 未授权 |
| `403` | 禁止访问 |
| `404` | 资源不存在 |
| `500` | 服务器内部错误 |
| `503` | 服务不可用 |

---

## 四、API 认证

### 4.1 认证方式

**Bearer Token 认证**

```
Authorization: Bearer <token>
```

### 4.2 Token 获取

**Endpoint**: `POST /auth/login`

**请求体**：

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**响应示例**：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}
```

---

## 五、API 限流

### 5.1 限流策略

| 端点 | 限流规则 |
|-----|---------|
| 公开 API | 100 次/分钟/IP |
| 认证 API | 1000 次/分钟/Token |
| 管理 API | 100 次/分钟/Token |

### 5.2 限流响应

```json
{
  "code": 429,
  "message": "Too Many Requests",
  "error": {
    "retryAfter": 60
  }
}
```

---

## 六、API 文档

### 6.1 Swagger 文档

**URL**: `https://api.huangxinzhe.com/docs`

### 6.2 Postman Collection

**URL**: `https://www.postman.com/huangxinzhe/workspace/api`

---

## 七、API 测试

### 7.1 测试工具

- **Jest**: 单元测试
- **Supertest**: 集成测试
- **Postman**: 手动测试

### 7.2 测试示例

```typescript
// tests/projects.test.ts
import request from 'supertest';

describe('Projects API', () => {
  it('should get all projects', async () => {
    const res = await request(app).get('/v1/projects');
    expect(res.status).toBe(200);
    expect(res.body.code).toBe(200);
    expect(res.body.data.items).toBeArray();
  });
  
  it('should get project by slug', async () => {
    const res = await request(app).get('/v1/projects/claw-os');
    expect(res.status).toBe(200);
    expect(res.body.code).toBe(200);
    expect(res.body.data.slug).toBe('claw-os');
  });
});
```

---

## 八、API 版本管理

### 8.1 版本策略

- **v1**: 当前版本
- **v2**: 下一版本（预留）

### 8.2 版本迁移

| 版本 | 发布日期 | 变更说明 |
|-----|---------|---------|
| v1 | 2026-03-02 | 初始版本 |

---

## 九、API 监控

### 9.1 监控指标

| 指标 | 说明 |
|-----|------|
| 请求总数 | 总请求数 |
| 成功请求数 | 2xx 响应数 |
| 失败请求数 | 4xx/5xx 响应数 |
| 平均响应时间 | 平均响应时间 |
| P95 响应时间 | 95% 请求响应时间 |
| P99 响应时间 | 99% 请求响应时间 |

### 9.2 监控工具

- **Vercel Analytics**: 请求监控
- **Sentry**: 错误监控
- **Datadog**: 性能监控

---

## 十、API 安全

### 10.1 安全措施

| 措施 | 说明 |
|-----|------|
| **HTTPS** | 强制 HTTPS 连接 |
| **CORS** | 限制跨域请求 |
| **Rate Limiting** | 限流保护 |
| **Input Validation** | 输入验证 |
| **SQL Injection Protection** | SQL 注入防护 |
| **XSS Protection** | XSS 防护 |

### 10.2 安全头

```
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
```

---

## 十一、API 文档完成

**API 设计文档完成！**
