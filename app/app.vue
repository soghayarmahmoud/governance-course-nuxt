<template>
  <div class="app-wrapper" dir="rtl" role="main" aria-label="منصة تعليمية تفاعلية حول نماذج الحوكمة الصحية">
    <div class="app-container" role="region" aria-live="polite" aria-label="محتوى الدورة التدريبية">
      <div class="progress-shell" aria-hidden="true">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      
      <transition name="slide-fade">
        <div v-if="activeSlide === 1" class="slide intro-slide" role="article" aria-label="شاشة البداية">
          <div class="badge" aria-label="نوع الدورة">دورة تدريبية مكثفة</div>
          <h1>نماذج وهياكل الحوكمة الصحية</h1>
          <p class="lead">الإطار المتكامل لتوزيع الأدوار والمسؤوليات وتعزيز المساءلة والشفافية في المنشآت الطبية.</p>
          <div class="divider" aria-hidden="true"></div>
          <button class="primary-btn pulse" @click="nextSlide" aria-label="بدء الرحلة التعليمية">ابدأ الرحلة التعليمية <i class="fas fa-arrow-left" aria-hidden="true"></i></button>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="activeSlide === 2" class="slide" role="article" aria-label="تعريف الحوكمة الصحية">
          <h2 class="section-title">تعريف الحوكمة الصحية</h2>
          <div class="content-grid">
            <div class="text-side">
              <p>هي الإطار الذي يحدد توزيع الأدوار والمسؤوليات بين:</p>
              <ul class="styled-list" aria-label="الجهات المسؤولة">
                <li><i class="fas fa-users" aria-hidden="true"></i> مجلس الإدارة</li>
                <li><i class="fas fa-user-tie" aria-hidden="true"></i> الإدارة التنفيذية</li>
                <li><i class="fas fa-clipboard-list" aria-hidden="true"></i> اللجان المتخصصة</li>
              </ul>
              <div class="highlight-box" role="note">
                الهدف الأساسي هو ضمان <strong>المساءلة والشفافية</strong> في كل قرار طبي وإداري.
              </div>
            </div>
            <div class="visual-side" aria-hidden="true">
              <div class="abstract-shape">
                <i class="fas fa-hospital-user main-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="activeSlide === 3" class="slide" role="article" aria-label="نموذج خطوط الدفاع الثلاثة">
          <h2 class="section-title">نموذج خطوط الدفاع الثلاثة</h2>
          <p class="center-text">اضغط على كل خط دفاع لاستكشاف المهام:</p>
          <div class="cards-flex" role="region" aria-label="بطاقات خطوط الدفاع">
            <div class="info-card" @click="reveal(1)" @keydown.enter="reveal(1)" @keydown.space="reveal(1)" :class="{ active: revealed === 1 }" role="button" tabindex="0" :aria-expanded="revealed === 1" aria-label="الخط الأول: الإدارة التنفيذية">
              <div class="card-num" aria-hidden="true">01</div>
              <h3>الخط الأول</h3>
              <p>الإدارة التنفيذية</p>
              <div v-if="revealed === 1" class="reveal-text" role="region">مسؤولة عن التنفيذ اليومي والتشغيل الفعلي للمنشأة.</div>
            </div>
            <div class="info-card" @click="reveal(2)" @keydown.enter="reveal(2)" @keydown.space="reveal(2)" :class="{ active: revealed === 2 }" role="button" tabindex="0" :aria-expanded="revealed === 2" aria-label="الخط الثاني: إدارة المخاطر والامتثال">
              <div class="card-num" aria-hidden="true">02</div>
              <h3>الخط الثاني</h3>
              <p>إدارة المخاطر والامتثال</p>
              <div v-if="revealed === 2" class="reveal-text" role="region">مسؤولة عن المراقبة وضمان سير العمل وفق الأنظمة واللوائح.</div>
            </div>
            <div class="info-card" @click="reveal(3)" @keydown.enter="reveal(3)" @keydown.space="reveal(3)" :class="{ active: revealed === 3 }" role="button" tabindex="0" :aria-expanded="revealed === 3" aria-label="الخط الثالث: التدقيق الداخلي">
              <div class="card-num" aria-hidden="true">03</div>
              <h3>الخط الثالث</h3>
              <p>التدقيق الداخلي</p>
              <div v-if="revealed === 3" class="reveal-text" role="region">جهة مستقلة تماماً تقوم بالمراجعة والتقييم النهائي للأداء.</div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="activeSlide === 4" class="slide" role="article" aria-label="مجلس الإدارة واللجان التابعة">
          <h2 class="section-title">مجلس الإدارة واللجان التابعة</h2>
          <div class="table-wrapper" role="region" aria-label="جدول الجهات والأدوار">
            <table class="modern-table" summary="الجهات المختلفة وأدوارها الرئيسية">
              <thead>
                <tr>
                  <th scope="col">الجهة</th>
                  <th scope="col">الدور الرئيسي</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>مجلس الإدارة</strong></td>
                  <td>اعتماد الاستراتيجية والإشراف (يوجه ولا يُشغل).</td>
                </tr>
                <tr>
                  <td><strong>لجنة الجودة</strong></td>
                  <td>مراجعة نسب الأخطاء الجسيمة وخطط التحسين.</td>
                </tr>
                <tr>
                  <td><strong>لجنة الامتثال</strong></td>
                  <td>برامج الامتثال ومعالجة تضارب المصالح.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="activeSlide === 5" class="slide" role="article" aria-label="مصفوفة الصلاحيات DoA">
          <h2 class="section-title">مصفوفة الصلاحيات DoA</h2>
          <div class="content-grid">
            <div class="text-side">
              <p>هي الوثيقة التي تضبط القرار وتوضح المساءلة من خلال تحديد:</p>
              <div class="feature-tag">من يملك القرار؟</div>
              <div class="feature-tag">بأي مستوى إداري؟</div>
              <div class="feature-tag">ما هي الحدود المالية؟</div>
            </div>
            <div class="visual-side" aria-hidden="true">
              <div class="logic-flow">
                <div class="flow-item">مجلس يوجه</div>
                <div class="arrow">↓</div>
                <div class="flow-item">لجان توصي</div>
                <div class="arrow">↓</div>
                <div class="flow-item primary">مصفوفة تضبط</div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="activeSlide === 6" class="slide" role="article" aria-label="نشاط تفاعلي">
          <h2 class="section-title">نشاط تفاعلي: حوكمة أم امتثال؟</h2>
          <div class="quiz-container" role="region" aria-label="سؤال اختبار">
            <div class="scenario" role="note">
              <strong>السيناريو:</strong> لاحظت لجنة الجودة أن 30% من الأطباء لا يوثقون تقارير الخروج وفق السياسة.
            </div>
            <div class="question">إصدار سياسة جديدة تلزم بالتوثيق خلال 24 ساعة، يعتبر:</div>
            <div class="options" role="group" aria-label="خيارات الإجابة">
              <button class="opt-btn" @click="answerQuiz('correct')" aria-label="الخيار الأول: قرار حوكمة">قرار حوكمة</button>
              <button class="opt-btn" @click="answerQuiz('wrong')" aria-label="الخيار الثاني: إجراء امتثال">إجراء امتثال</button>
            </div>
            <div v-if="quizFeedback" :class="['feedback', quizStatus]" role="alert">
              {{ quizFeedback }}
            </div>
          </div>
        </div>
      </transition>

      <transition name="slide-fade">
        <div v-if="activeSlide === 7" class="slide" role="article" aria-label="أخلاقيات العمل وتضارب المصالح">
          <h2 class="section-title">أخلاقيات العمل وتضارب المصالح</h2>
          <div class="ethics-timeline" role="region" aria-label="خطوات معالجة تضارب المصالح">
            <div class="time-item">
              <div class="time-icon" aria-hidden="true">1</div>
              <h4>الإفصاح</h4>
              <p>إلزام الجميع بالتبليغ عن أي مصلحة شخصية.</p>
            </div>
            <div class="time-item">
              <div class="time-icon" aria-hidden="true">2</div>
              <h4>التقييم</h4>
              <p>تحديد نوع التضارب (فعلي أم محتمل).</p>
            </div>
            <div class="time-item">
              <div class="time-icon" aria-hidden="true">3</div>
              <h4>المعالجة</h4>
              <p>التنحي عن القرار أو نقل الصلاحية.</p>
            </div>
          </div>
          <div class="pro-tip" role="note">
            <i class="fas fa-lightbulb" aria-hidden="true"></i> <strong>تضارب المصالح:</strong> ليس خطأً بالضرورة، لكنه يصبح خطراً إن لم يُفصح عنه.
          </div>
        </div>
      </transition>

      <div class="nav-footer" role="navigation" aria-label="التنقل بين الشرائح">
        <button v-if="activeSlide > 1" class="nav-btn prev" @click="prevSlide" :aria-label="`الذهاب للشريحة السابقة (الشريحة ${activeSlide - 1})`">السابق</button>
        <span class="progress-text" aria-live="off">صفحة {{ activeSlide }} من 7</span>
        <button v-if="activeSlide < 7" class="nav-btn next" @click="nextSlide" :aria-label="`الذهاب للشريحة التالية (الشريحة ${activeSlide + 1})`">التالي</button>
        <button v-if="activeSlide === 7" class="nav-btn finish" @click="activeSlide = 1" aria-label="إنهاء الدورة والعودة للبداية">إنهاء الدورة</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

/**
 * Governance Course - Interactive Learning Platform
 * Designed for LMS Integration
 * Compatible with SCORM, xAPI, and standard LMS platforms
 */

// ========== State Management ==========
const activeSlide = ref<number>(1)
const revealed = ref<number | null>(null)
const quizFeedback = ref<string>('')
const quizStatus = ref<'success' | 'error' | ''>('')
const quizAttempts = ref<number>(0)
const completedSlides = ref<Set<number>>(new Set())

// ========== Configuration ==========
const TOTAL_SLIDES = 7
const MAX_QUIZ_ATTEMPTS = 3

// ========== Computed Properties ==========
const progress = computed<number>(() => {
  return Math.round((activeSlide.value / TOTAL_SLIDES) * 100)
})

const isComplete = computed<boolean>(() => {
  return activeSlide.value === TOTAL_SLIDES && quizStatus.value === 'success'
})

// ========== Navigation Methods ==========
const nextSlide = (): void => {
  if (activeSlide.value < TOTAL_SLIDES) {
    completedSlides.value.add(activeSlide.value)
    activeSlide.value++
    resetState()
    // Track analytics if available
    trackProgress('slide_advanced', activeSlide.value)
  }
}

const prevSlide = (): void => {
  if (activeSlide.value > 1) {
    activeSlide.value--
    resetState()
    trackProgress('slide_previous', activeSlide.value)
  }
}

// ========== Interaction Methods ==========
const reveal = (id: number): void => {
  revealed.value = revealed.value === id ? null : id
  trackProgress('card_revealed', id)
}

const answerQuiz = (type: 'correct' | 'wrong'): void => {
  quizAttempts.value++

  if (type === 'correct') {
    quizFeedback.value =
      'أحسنت! الحوكمة هي التي تضع الإطار والسياسات، بينما الامتثال يراقب التطبيق. لقد أكملت الدورة بنجاح!'
    quizStatus.value = 'success'
    completedSlides.value.add(activeSlide.value)
    trackProgress('quiz_passed', quizAttempts.value)
  } else {
    if (quizAttempts.value < MAX_QUIZ_ATTEMPTS) {
      quizFeedback.value = `للأسف خطأ. إصدار السياسة هو قرار تنظيمي (الحوكمة)، أما متابعة تنفيذها فهو الامتثال. (محاولة ${quizAttempts.value}/${MAX_QUIZ_ATTEMPTS})`
    } else {
      quizFeedback.value =
        'انتهت محاولاتك. الإجابة الصحيحة: إصدار السياسة = قرار حوكمة. يمكنك العودة والبدء من جديد.'
      trackProgress('quiz_failed', quizAttempts.value)
    }
    quizStatus.value = 'error'
  }

  trackProgress('quiz_answered', type)
}

// ========== State Reset ==========
const reset = (): void => {
  revealed.value = null
  quizFeedback.value = ''
  quizStatus.value = ''
  quizAttempts.value = 0
}

const resetState = (): void => {
  reset()
}

// ========== Analytics & Tracking ==========
/**
 * Track user progress for LMS integration
 * Send data to parent LMS if available via postMessage
 */
const trackProgress = (event: string, data: any): void => {
  try {
    const trackingData = {
      event,
      data,
      timestamp: new Date().toISOString(),
      userId: getCurrentUserId(),
      courseId: getCourseId(),
      progress: progress.value
    }

    // Log to console for debugging
    console.log('[Analytics]', trackingData)

    // Send to parent window (LMS) if available
    if (window.parent !== window) {
      window.parent.postMessage(
        {
          type: 'COURSE_PROGRESS',
          payload: trackingData
        },
        '*'
      )
    }

    // Store in localStorage for persistence
    saveProgressToStorage(trackingData)
  } catch (error) {
    console.warn('Failed to track progress:', error)
  }
}

// ========== LMS Integration Helpers ==========
const getCurrentUserId = (): string => {
  // Try to get from window object (some LMS set this)
  return (window as any).userId || sessionStorage.getItem('userId') || 'anonymous'
}

const getCourseId = (): string => {
  return (window as any).courseId || 'governance-course-001'
}

const saveProgressToStorage = (data: any): void => {
  try {
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}')
    progress[data.userId] = {
      lastSlide: activeSlide.value,
      progress: progress.value,
      completedSlides: Array.from(completedSlides.value),
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('courseProgress', JSON.stringify(progress))
  } catch (error) {
    console.warn('Failed to save progress:', error)
  }
}

const loadProgressFromStorage = (): void => {
  try {
    const userId = getCurrentUserId()
    const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}')
    if (progress[userId]) {
      activeSlide.value = progress[userId].lastSlide || 1
      if (progress[userId].completedSlides) {
        completedSlides.value = new Set(progress[userId].completedSlides)
      }
    }
  } catch (error) {
    console.warn('Failed to load progress:', error)
  }
}

// ========== Keyboard Navigation ==========
const handleKeydown = (event: KeyboardEvent): void => {
  switch (event.key) {
    case 'ArrowRight':
      nextSlide()
      break
    case 'ArrowLeft':
      prevSlide()
      break
    default:
      break
  }
}

// ========== Lifecycle Hooks ==========
onMounted((): void => {
  // Load saved progress
  loadProgressFromStorage()

  // Add keyboard navigation
  window.addEventListener('keydown', handleKeydown)

  // Send course started event
  trackProgress('course_started', { totalSlides: TOTAL_SLIDES })

  // Log browser info for LMS compatibility debugging
  console.log('[Course Info]', {
    version: '1.0.0',
    compatible: ['Moodle', 'Canvas', 'Blackboard', 'Schoology', 'SCORM'],
    totalSlides: TOTAL_SLIDES,
    language: 'Arabic',
    rtl: true
  })
})

onBeforeUnmount((): void => {
  // Clean up event listener
  window.removeEventListener('keydown', handleKeydown)

  // Send course closed event
  trackProgress('course_closed', {
    completionPercentage: progress.value,
    lastSlide: activeSlide.value
  })
})

// ========== Expose for debugging ==========
if (import.meta.env.DEV) {
  ;(window as any).__courseDebug = {
    activeSlide,
    progress,
    completedSlides,
    quizAttempts,
    reset,
    trackProgress
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');

/* ========== CSS Reset & Variables ========== */
:root {
  --primary: #005088;
  --accent: #11caa0;
  --bg: #f4f7fa;
  --text: #1e293b;
  --text-light: #64748b;
  --white: #ffffff;
  --border: #e2e8f0;
  --success: #dcfce7;
  --success-text: #166534;
  --error: #fee2e2;
  --error-text: #991b1b;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 10px 30px rgba(0,0,0,0.1);
  --shadow-lg: 0 40px 100px rgba(0,0,0,0.1);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

/* ========== Base Styles ========== */
body {
  margin: 0;
  padding: 0;
  font-family: 'Cairo', 'Segoe UI', 'Helvetica Neue', sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

/* ========== Main Container ========== */
.app-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: radial-gradient(circle at top left, rgba(17, 202, 160, 0.16), transparent 20%),
              radial-gradient(circle at bottom right, rgba(0, 80, 136, 0.12), transparent 18%),
              linear-gradient(180deg, #eef5fb 0%, #f8fbff 100%);
}

.app-container {
  width: 100%;
  max-width: 1100px;
  min-height: 750px;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 28px;
  box-shadow: var(--shadow-lg);
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 42px;
  gap: 20px;
  border: 1px solid rgba(15, 77, 146, 0.08);
  backdrop-filter: blur(18px);
  overflow: hidden;
}

.app-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 20%, rgba(17, 202, 160, 0.08), transparent 15%),
              radial-gradient(circle at 85% 10%, rgba(0, 80, 136, 0.10), transparent 14%);
  pointer-events: none;
  z-index: 0;
}

.progress-shell {
  width: 100%;
  height: 10px;
  background: rgba(0, 80, 136, 0.08);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.progress-bar {
  height: 100%;
  width: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), #0f7fbb);
  box-shadow: 0 0 18px rgba(17, 202, 160, 0.35);
  transition: width 0.45s ease;
}

/* ========== Transitions & Animations ========== */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.slide {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
}

.intro-slide {
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

/* ========== Typography ========== */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 20px;
  color: var(--primary);
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  margin-bottom: 10px;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

p {
  margin: 0 0 16px 0;
  font-size: 1rem;
  color: var(--text);
}

.lead {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: var(--text-light);
  margin-bottom: 40px;
  line-height: 1.8;
}

.center-text {
  text-align: center;
  font-size: 1.05rem;
  color: var(--text-light);
  margin-bottom: 24px;
}

/* ========== Components ========== */
.badge {
  background: #d0e8f8;
  color: var(--primary);
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 700;
  width: fit-content;
  margin: 0 auto 20px;
  display: inline-block;
  font-size: 0.95rem;
}

.divider {
  height: 4px;
  width: 100px;
  background: var(--accent);
  margin: 20px auto 40px;
  border-radius: 2px;
}

.section-title {
  color: var(--primary);
  margin-bottom: 30px;
  border-right: 6px solid var(--accent);
  padding-right: 15px;
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  right: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), transparent);
  border-radius: 2px;
}

/* ========== Grid Layouts ========== */
.content-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
  margin-top: 30px;
}

.text-side {
  flex: 1;
}

.visual-side {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
}

.abstract-shape {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(0, 80, 136, 0.05), rgba(17, 202, 160, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px dashed rgba(0, 80, 136, 0.1);
  position: relative;
}

.main-icon {
  font-size: 12rem;
  color: #e2e8f0;
  opacity: 0.6;
}

/* ========== Lists & Text Styles ========== */
.styled-list {
  list-style: none;
  padding: 0;
  margin: 20px 0 30px 0;
}

.styled-list li {
  font-size: 1.1rem;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(17, 202, 160, 0.05);
  transition: var(--transition);
}

.styled-list li:hover {
  background: rgba(17, 202, 160, 0.1);
  transform: translateX(-8px);
}

.styled-list li i {
  color: var(--accent);
  font-size: 1.3rem;
  flex-shrink: 0;
}

.highlight-box {
  background: linear-gradient(135deg, #f0fdf4, #dbeafe);
  border-left: 6px solid var(--accent);
  padding: 20px;
  border-radius: 12px;
  margin-top: 30px;
  border-right: 1px solid rgba(17, 202, 160, 0.2);
  transition: var(--transition);
}

.highlight-box:hover {
  box-shadow: 0 8px 20px rgba(17, 202, 160, 0.15);
}

.feature-tag {
  display: inline-block;
  background: #e0f2fe;
  color: #0369a1;
  padding: 10px 18px;
  border-radius: 12px;
  margin: 6px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: var(--transition);
}

.feature-tag:hover {
  background: #7dd3fc;
  color: #ffffff;
  transform: translateY(-2px);
}

/* ========== Cards ========== */
.cards-flex {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.info-card {
  flex: 1;
  min-width: 250px;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border: 2px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-card:hover {
  transform: translateY(-12px);
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.info-card:hover::before {
  opacity: 1;
}

.info-card.active {
  background: linear-gradient(135deg, var(--primary), #003d5c);
  color: var(--white);
  border-color: var(--primary);
}

.info-card.active::before {
  opacity: 1;
}

.card-num {
  font-size: 2.5rem;
  font-weight: 900;
  opacity: 0.2;
  margin-bottom: 10px;
  line-height: 1;
}

.info-card h3 {
  margin-bottom: 6px;
  font-size: 1.25rem;
}

.info-card p {
  margin-bottom: 0;
  font-size: 0.95rem;
  opacity: 0.85;
}

.reveal-text {
  margin-top: 15px;
  font-size: 0.95rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 15px;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== Tables ========== */
.table-wrapper {
  overflow-x: auto;
  margin-top: 30px;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
}

.modern-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--white);
}

.modern-table thead {
  background: linear-gradient(135deg, var(--primary), #003d5c);
  color: var(--white);
}

.modern-table th {
  padding: 20px;
  text-align: right;
  font-weight: 700;
  font-size: 1rem;
  position: sticky;
  top: 0;
}

.modern-table td {
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.modern-table tbody tr:hover {
  background-color: #f8fafc;
}

.modern-table tbody tr:last-child td {
  border-bottom: none;
}

/* ========== Quiz Components ========== */
.quiz-container {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--border);
  margin-top: 20px;
}

.scenario {
  background: linear-gradient(135deg, var(--primary), #003d5c);
  color: var(--white);
  padding: 24px;
  border-radius: 14px;
  margin-bottom: 28px;
  font-size: 1.05rem;
  line-height: 1.8;
}

.scenario strong {
  font-weight: 700;
}

.question {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 20px;
  font-weight: 600;
}

.options {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.opt-btn {
  flex: 1;
  min-width: 200px;
  background: var(--white);
  border: 2px solid var(--border);
  padding: 18px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
  font-family: 'Cairo', sans-serif;
}

.opt-btn:hover {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(0, 80, 136, 0.05), rgba(17, 202, 160, 0.05));
  transform: translateY(-4px);
  box-shadow: var(--shadow-sm);
}

.opt-btn:active {
  transform: translateY(-2px);
}

.feedback {
  margin-top: 28px;
  padding: 20px 24px;
  border-radius: 12px;
  font-weight: 700;
  border-left: 6px solid;
  animation: slideDown 0.3s ease-out;
}

.feedback.success {
  background: var(--success);
  color: var(--success-text);
  border-left-color: #22c55e;
}

.feedback.error {
  background: var(--error);
  color: var(--error-text);
  border-left-color: #ef4444;
}

/* ========== Timeline/Process ========== */
.ethics-timeline {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  gap: 20px;
  flex-wrap: wrap;
}

.time-item {
  text-align: center;
  flex: 1;
  min-width: 200px;
  padding: 20px;
}

.time-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent), #11b38e);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-weight: 900;
  font-size: 1.8rem;
  box-shadow: 0 4px 12px rgba(17, 202, 160, 0.3);
}

.time-item h4 {
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.time-item p {
  color: var(--text-light);
  font-size: 0.95rem;
  margin: 0;
}

.pro-tip {
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  border-left: 6px solid #f59e0b;
  padding: 24px;
  border-radius: 12px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: var(--transition);
}

.pro-tip:hover {
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.15);
  transform: translateX(4px);
}

.pro-tip i {
  font-size: 1.8rem;
  color: #f59e0b;
  flex-shrink: 0;
}

.pro-tip strong {
  color: var(--primary);
}

/* ========== Logic Flow ========== */
.logic-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.flow-item {
  padding: 16px 32px;
  border: 2px solid var(--border);
  border-radius: 12px;
  width: 220px;
  text-align: center;
  font-weight: 600;
  color: var(--text);
  background: var(--white);
  transition: var(--transition);
}

.flow-item:hover {
  border-color: var(--primary);
  transform: translateX(-4px);
}

.flow-item.primary {
  background: linear-gradient(135deg, var(--primary), #003d5c);
  color: var(--white);
  border: none;
}

.arrow {
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: 700;
}

/* ========== Navigation Footer ========== */
.nav-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  border-top: 2px solid var(--border);
  padding-top: 24px;
}

.progress-text {
  font-weight: 700;
  color: var(--primary);
  font-size: 1rem;
  min-width: 140px;
  text-align: center;
}

.nav-btn {
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 700;
  transition: var(--transition);
  cursor: pointer;
  font-family: 'Cairo', sans-serif;
  border: 2px solid var(--border);
  background: var(--white);
  color: var(--text);
  font-size: 0.95rem;
}

.nav-btn:hover {
  border-color: var(--primary);
  background: linear-gradient(135deg, rgba(0, 80, 136, 0.05), rgba(17, 202, 160, 0.05));
  transform: translateY(-2px);
}

.nav-btn.next,
.nav-btn.finish {
  background: linear-gradient(135deg, var(--primary), #003d5c);
  color: var(--white);
  border: none;
}

.nav-btn.next:hover,
.nav-btn.finish:hover {
  box-shadow: var(--shadow-md);
}

/* ========== Button Animations ========== */
.primary-btn {
  background: linear-gradient(135deg, var(--primary), #003d5c);
  color: var(--white);
  padding: 16px 40px;
  font-size: clamp(0.95rem, 1.5vw, 1.2rem);
  border: none;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  font-family: 'Cairo', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 8px 20px rgba(0, 80, 136, 0.25);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 80, 136, 0.35);
}

.primary-btn:active {
  transform: translateY(-1px);
}

.pulse {
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.fa-arrow-left {
  margin-right: 8px;
}

/* ========== Accessibility ========== */
button:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
  border-radius: 12px;
}

[tabindex]:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ========== Responsive Design ========== */
/* Tablet (768px - 1024px) */
@media (max-width: 1024px) {
  .app-container {
    padding: 32px;
    min-height: auto;
    height: auto;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .visual-side {
    min-height: 250px;
  }

  .abstract-shape {
    width: 200px;
    height: 200px;
  }

  .main-icon {
    font-size: 8rem;
  }

  .intro-slide h1 {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .cards-flex {
    gap: 16px;
  }

  .info-card {
    min-width: 200px;
    padding: 24px;
  }

  .ethics-timeline {
    flex-direction: column;
    align-items: stretch;
  }

  .time-item {
    min-width: 100%;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    background: #f8fafc;
  }

  .nav-footer {
    justify-content: center;
    gap: 12px;
  }

  .nav-btn {
    padding: 10px 24px;
    font-size: 0.9rem;
  }
}

/* Mobile (480px - 767px) */
@media (max-width: 767px) {
  html {
    font-size: 14px;
  }

  body {
    padding: 0;
  }

  .app-wrapper {
    min-height: 100vh;
    padding: 12px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .app-container {
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 24px;
    border-radius: 16px;
    gap: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .slide {
    min-height: auto;
  }

  .intro-slide h1 {
    font-size: 2rem;
  }

  .intro-slide .lead {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .badge {
    font-size: 0.85rem;
    padding: 8px 16px;
  }

  .divider {
    width: 80px;
    margin: 16px auto 30px;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
    padding-right: 12px;
  }

  .section-title::after {
    display: none;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .cards-flex {
    flex-direction: column;
    gap: 12px;
  }

  .info-card {
    min-width: 100%;
    padding: 20px;
  }

  .table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .modern-table {
    font-size: 0.9rem;
  }

  .modern-table th,
  .modern-table td {
    padding: 14px 12px;
  }

  .quiz-container {
    padding: 24px 16px;
    border-radius: 14px;
  }

  .scenario {
    padding: 16px;
    font-size: 0.95rem;
  }

  .options {
    gap: 12px;
    flex-direction: column;
  }

  .opt-btn {
    min-width: 100%;
    padding: 16px 20px;
  }

  .ethics-timeline {
    gap: 12px;
  }

  .pro-tip {
    padding: 16px;
    gap: 12px;
    flex-direction: column;
    text-align: center;
  }

  .pro-tip i {
    font-size: 1.5rem;
  }

  .logic-flow {
    gap: 10px;
  }

  .flow-item {
    width: 100%;
    padding: 14px 24px;
    font-size: 0.9rem;
  }

  .nav-footer {
    flex-direction: column;
    gap: 12px;
    border-top: 1px solid var(--border);
    padding-top: 16px;
  }

  .progress-text {
    width: 100%;
    min-width: unset;
    order: 3;
  }

  .nav-btn {
    width: 100%;
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  .primary-btn {
    width: 100%;
    padding: 14px 24px;
  }

  /* Keyboard accessible cards on mobile */
  .info-card {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  /* Print styles */
  @media print {
    .nav-footer {
      display: none;
    }

    .app-container {
      box-shadow: none;
      border: 1px solid #cccccc;
    }
  }
}

/* Small Mobile (< 480px) */
@media (max-width: 479px) {
  html {
    font-size: 13px;
  }

  .app-wrapper {
    padding: 8px;
  }

  .app-container {
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .intro-slide h1 {
    font-size: 1.6rem;
    margin-bottom: 16px;
  }

  .lead {
    font-size: 0.9rem;
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .styled-list li {
    font-size: 0.95rem;
    gap: 12px;
    padding: 10px 12px;
    margin-bottom: 12px;
  }

  .feature-tag {
    font-size: 0.85rem;
    padding: 8px 14px;
    margin: 4px;
  }

  .time-icon {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }

  .highlight-box {
    padding: 16px;
  }

  .quiz-container {
    padding: 16px;
  }
}

/* Print Friendly */
@media print {
  .nav-footer,
  button {
    display: none;
  }

  .app-container {
    box-shadow: none;
    padding: 20px;
  }

  .slide {
    page-break-inside: avoid;
    break-inside: avoid;
  }
}

/* LMS Compatibility - Fallback for systems without custom fonts */
@supports not (font-family: 'Cairo') {
  body, .app-container, button, input, select, textarea {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  }
}
</style>
