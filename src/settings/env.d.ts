namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    // notion
    NOTION_TOKEN: string
    NOTION_DATABASE_ID: string
  }
}
