# Resource API Documentation

API for managing resources/blog posts with media hosting on Supabase.

## Base URL

```
https://yarmadmmnpclmkdeogme.supabase.co/functions/v1/resource-api
```

## Authentication

All requests require an `x-api-key` header:

```
x-api-key: 3b7d49c4f3b3250ed82578678840ab2a99c1a88873e78b92285a214fc5464571
```

---

## Endpoints

### List All Resources

```http
GET /resource-api
```

**Response:**
```json
{
  "resources": [
    {
      "id": "uuid",
      "slug": "my-resource",
      "title": "My Resource Title",
      "description": "Resource description",
      "thumbnail": "https://...",
      "category": "AI Strategy",
      "is_published": true,
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

---

### Get Single Resource

```http
GET /resource-api/{slug}
```

**Response:**
```json
{
  "resource": {
    "id": "uuid",
    "slug": "my-resource",
    "title": "My Resource Title",
    "description": "Resource description",
    "thumbnail": "https://...",
    "category": "AI Strategy",
    "content": "# Markdown content...",
    "is_published": true,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": "2024-01-01T00:00:00Z"
  }
}
```

---

### Create Resource

```http
POST /resource-api
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "My New Resource",
  "slug": "my-new-resource",
  "description": "A brief description of the resource",
  "category": "Automation",
  "content": "# Heading\n\nYour markdown content here.\n\n![Image]({{IMAGE_0}})\n\nMore content...",
  "is_published": true,
  "thumbnail_base64": "iVBORw0KGgoAAAANSUhEUgAA...",
  "thumbnail_filename": "thumbnail.png",
  "images": [
    {
      "base64": "iVBORw0KGgoAAAANSUhEUgAA...",
      "filename": "diagram.png"
    }
  ]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Resource title |
| `slug` | string | No | URL slug (auto-generated from title if omitted) |
| `description` | string | No | Brief description |
| `category` | string | No | Category name (e.g., "Automation", "AI Strategy") |
| `content` | string | Yes | Markdown content |
| `is_published` | boolean | No | Whether to publish immediately (default: true) |
| `thumbnail_base64` | string | No | Base64-encoded thumbnail image |
| `thumbnail_filename` | string | No | Thumbnail filename with extension |
| `images` | array | No | Array of images to upload |

**Image Placeholders:**

Use `{{IMAGE_0}}`, `{{IMAGE_1}}`, etc. in your content. These will be replaced with the uploaded image URLs.

**Response (201 Created):**
```json
{
  "resource": {
    "id": "uuid",
    "slug": "my-new-resource",
    "title": "My New Resource",
    ...
  },
  "message": "Resource created successfully"
}
```

---

### Update Resource

```http
PUT /resource-api/{slug}
Content-Type: application/json
```

**Request Body (all fields optional):**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "category": "New Category",
  "content": "# Updated content",
  "is_published": false,
  "thumbnail_base64": "...",
  "thumbnail_filename": "new-thumbnail.png"
}
```

**Response:**
```json
{
  "resource": { ... },
  "message": "Resource updated successfully"
}
```

---

### Delete Resource

```http
DELETE /resource-api/{slug}
```

**Response:**
```json
{
  "message": "Resource deleted successfully"
}
```

---

## Media Storage

All uploaded images and videos are stored in Supabase Storage:

- **Bucket:** `resource-media`
- **Thumbnails:** `thumbnails/{slug}/{timestamp}-{filename}`
- **Images:** `images/{slug}/{timestamp}-{filename}`

**Supported formats:**
- Images: JPEG, PNG, GIF, WebP, SVG
- Videos: MP4, WebM
- Max file size: 50MB

**Public URLs:** All media is publicly accessible at:
```
https://yarmadmmnpclmkdeogme.supabase.co/storage/v1/object/public/resource-media/{path}
```

---

## n8n Integration Example

### Create Resource with Image

```javascript
// HTTP Request node configuration
{
  "method": "POST",
  "url": "https://yarmadmmnpclmkdeogme.supabase.co/functions/v1/resource-api",
  "headers": {
    "Content-Type": "application/json",
    "x-api-key": "3b7d49c4f3b3250ed82578678840ab2a99c1a88873e78b92285a214fc5464571"
  },
  "body": {
    "title": "{{ $json.title }}",
    "description": "{{ $json.description }}",
    "category": "{{ $json.category }}",
    "content": "{{ $json.content }}",
    "thumbnail_base64": "{{ $binary.thumbnail.data }}",
    "thumbnail_filename": "{{ $binary.thumbnail.fileName }}"
  }
}
```

### Workflow Steps

1. **Trigger** - Webhook, Schedule, or Manual
2. **Get Content** - From Notion, Google Docs, or generate with AI
3. **Process Images** - Convert to base64 if needed
4. **HTTP Request** - POST to Resource API
5. **Notify** - Slack/Email confirmation

---

## cURL Examples

### Create a simple resource:
```bash
curl -X POST "https://yarmadmmnpclmkdeogme.supabase.co/functions/v1/resource-api" \
  -H "Content-Type: application/json" \
  -H "x-api-key: 3b7d49c4f3b3250ed82578678840ab2a99c1a88873e78b92285a214fc5464571" \
  -d '{
    "title": "Getting Started with AI",
    "description": "A beginner guide to AI in business",
    "category": "AI Strategy",
    "content": "# Getting Started\n\nWelcome to AI..."
  }'
```

### Create with thumbnail:
```bash
# First, encode your image to base64
THUMB_BASE64=$(base64 -i thumbnail.png)

curl -X POST "https://yarmadmmnpclmkdeogme.supabase.co/functions/v1/resource-api" \
  -H "Content-Type: application/json" \
  -H "x-api-key: 3b7d49c4f3b3250ed82578678840ab2a99c1a88873e78b92285a214fc5464571" \
  -d "{
    \"title\": \"My Resource\",
    \"content\": \"# Content here\",
    \"thumbnail_base64\": \"$THUMB_BASE64\",
    \"thumbnail_filename\": \"thumbnail.png\"
  }"
```

### List all resources:
```bash
curl "https://yarmadmmnpclmkdeogme.supabase.co/functions/v1/resource-api" \
  -H "x-api-key: 3b7d49c4f3b3250ed82578678840ab2a99c1a88873e78b92285a214fc5464571"
```

### Update a resource:
```bash
curl -X PUT "https://yarmadmmnpclmkdeogme.supabase.co/functions/v1/resource-api/my-resource-slug" \
  -H "Content-Type: application/json" \
  -H "x-api-key: 3b7d49c4f3b3250ed82578678840ab2a99c1a88873e78b92285a214fc5464571" \
  -d '{
    "is_published": false
  }'
```

### Delete a resource:
```bash
curl -X DELETE "https://yarmadmmnpclmkdeogme.supabase.co/functions/v1/resource-api/my-resource-slug" \
  -H "x-api-key: 3b7d49c4f3b3250ed82578678840ab2a99c1a88873e78b92285a214fc5464571"
```

---

## Error Responses

| Status | Error | Description |
|--------|-------|-------------|
| 400 | `title and content are required` | Missing required fields |
| 401 | `Unauthorized` | Invalid or missing API key |
| 404 | `Resource not found` | Slug doesn't exist |
| 409 | `A resource with this slug already exists` | Duplicate slug |
| 500 | `Internal server error` | Server error |

---

## Configuration

**Supabase Project:** `yarmadmmnpclmkdeogme`

**Environment Variables (Edge Function):**
- `RESOURCE_API_SECRET` - API authentication key
- `SUPABASE_URL` - Auto-provided
- `SUPABASE_SERVICE_ROLE_KEY` - Auto-provided

**Storage Bucket:** `resource-media` (public)
