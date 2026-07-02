export default defineNuxtConfig({
  // تفعيل وضع الـ Static Site Generation
  ssr: false, 
  
  app: {
    // مهم جداً: ضع اسم الـ Repository بتاعك هنا
    baseURL: '/governance-course-nuxt/', 
  }
})