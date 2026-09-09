# Notes API

A RESTful Notes API built with Node.js and Express.js.

This API allows users to create, read, update, and delete text notes.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Thunder Client
- Nodemon

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kosifrancis/note-api.git
   ```

2. Open the project folder:

   ```bash
   cd note-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Server

Start the development server with:

```bash
npm run dev
```

The API will run at `http://localhost:3000`.

## API Endpoints

### Create a Note

`POST /api/notes`

Request body:

```json
{
  "title": "My Note",
  "content": "This is my note."
}
```

Returns `201 Created`.

### Get All Notes

`GET /api/notes`

Returns all notes with `200 OK`.

### Get a Note by ID

`GET /api/notes/:id`

Returns `200 OK` if the note exists, or `404 Not Found` if it does not.

### Update a Note

`PUT /api/notes/:id`

Request body:

```json
{
  "title": "Updated Note",
  "content": "This note has been updated."
}
```

Returns `200 OK`. The `updatedAt` timestamp is updated when a note is edited.

### Delete a Note

`DELETE /api/notes/:id`

Returns `204 No Content` if the note is successfully deleted, or `404 Not Found` if it does not exist.

## Note Data Model

Each note contains:

```json
{
  "id": 1,
  "title": "My Note",
  "content": "This is my note.",
  "createdAt": "2026-09-09T00:00:00.000Z",
  "updatedAt": "2026-09-09T00:00:00.000Z"
}
```

## Validation

The API requires both `title` and `content`. If either field is missing or empty, it returns `400 Bad Request`:

```json
{
  "error": "Title and content are required"
}
```

## Error Handling

If a requested note does not exist, the API returns `404 Not Found`:

```json
{
  "error": "Note not found"
}
```

## Testing

The API was tested using Thunder Client in Visual Studio Code.