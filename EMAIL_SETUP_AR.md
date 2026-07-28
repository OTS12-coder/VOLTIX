# إعداد إرسال الإيميلات (Gmail حقيقي، من غير أي مفتاح ظاهر في الموقع)

الموقع دلوقتي بيبعت أي طلب (Request) أو رسالة تواصل (Contact) لجيميل **voltixeg6@gmail.com** مباشرة وأوتوماتيك، عن طريق Serverless Function صغيرة (`api/send-email.js`) شغالة على Vercel. الزائر مبيشوفش ولا يلمس أي مفتاح؛ كل حاجة بتحصل في السيرفر.

## خطوات التفعيل (مرة واحدة بس، حوالي ٥ دقايق)

### 1. فعّل "App Password" لحساب الجيميل
1. افتح: https://myaccount.google.com/security وفعّل **2-Step Verification** لو مش مفعّلة.
2. بعدين افتح: https://myaccount.google.com/apppasswords
3. اختار اسم زي "VOLTIX Website" واعمل Generate.
4. جوجل هيديك **كلمة سر مكونة من 16 حرف** — انسخها. (دي مش باسورد الجيميل العادي، وممكن تلغيها في أي وقت من نفس الصفحة).

### 2. انشر الموقع على Vercel (مجاني)
1. ارفع المشروع على GitHub (أو أي حساب Git).
2. روح على https://vercel.com/new واعمل Import للريبو.
3. اضغط Deploy (الإعدادات الافتراضية كفاية، مفيش أي تعديل مطلوب).

### 3. ضيف بيانات الجيميل كـ Environment Variables
في مشروعك على Vercel:
**Settings → Environment Variables** وضيف:

| Key | Value |
|---|---|
| `GMAIL_USER` | `voltixeg6@gmail.com` |
| `GMAIL_APP_PASSWORD` | الـ 16 حرف اللي نسختهم في خطوة 1 |

بعدها روح **Deployments → (⋯) → Redeploy** عشان القيم دي تتفعّل.

## خلاص كده
دلوقتي أي حد يبعت فورم "Request a Service" أو فورم "Contact" هيوصل فعليًا كإيميل حقيقي جوه **voltixeg6@gmail.com** أوتوماتيك، من غير ما الزائر يحتاج يفتح جيميله أو أي حاجة، ومن غير أي مفتاح ظاهر في كود الموقع (كله متخزن في إعدادات Vercel بس).

## ملاحظات
- لو حبيت تجرب محليًا قبل النشر، محتاج تشغل المشروع بأداة زي `vercel dev` عشان الـ API الصغيرة (`api/send-email.js`) تشتغل — فتح `index.html` كملف عادي في المتصفح مش هيخليها تشتغل، لازم سيرفر (Vercel أو أي Node server).
- لو غيّرت إيميل الشركة، غيّر قيمة `GMAIL_USER` في Vercel بالإضافة لتعديل `COMPANY_INFO.email` في `script.js`.
