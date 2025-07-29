cat <<EOF > README.md
# 🔢 React Native: useState ile Sayaç Uygulaması

Bu örnek proje, React Native'de \`useState\` hook'u kullanılarak sayaç (counter) uygulaması geliştirmeyi göstermektedir. Kullanıcı, "Increase" ve "Decrease" butonlarıyla sayıyı artırabilir veya azaltabilir.

---

## 🧱 Proje Özeti

Uygulama arayüzü 3 ana bileşenden oluşur:

- **"Increase" Butonu**: Sayaç değerini her tıklamada 3 artırır. Rengi kırmızıdır.
- **"Decrease" Butonu**: Sayaç değerini her tıklamada 1 azaltır. Rengi yeşildir.
- **Sayı Göstergesi**: Ortada büyük puntolu ve mor renkli olarak gösterilir.

Bu uygulama ile aşağıdaki temel konular öğrenilir:

- \`useState\` ile state yönetimi
- \`Button\` bileşenlerinin kullanımı
- \`onPress\` fonksiyonlarıyla etkileşimli işlemler
- Stil uygulamaları (renk, font, hizalama)

---

## 📹 Video ile Eşleşme

📌 Bu örnek, [devArdo/React Native Dersleri - View+Button](https://www.youtube.com/watch?v=kZnRRQC-zFA&list=PLkcIcaxfjelbSrGLKY4bKh4ppHC7IusKI&index=3) videosuna karşılık gelmektedir.

---

## 🎉Sizlerle Tanışmak İsterim

### [linkedin.com/yunusemreköklü](https://www.linkedin.com/in/yunusemrek%C3%B6kl%C3%BC/)(▀̿Ĺ̯▀̿ ̿)

### (⌐■_■)[instagram.com/yunus.emrekoklu](https://www.instagram.com/yunus.emrekoklu/)
---

## 🚀 Başlangıç

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsin:

### 1. Yeni bir proje oluştur (Expo kullanarak)

> **_Terminale sırasıyla yazılacaklar_**

    npx create-expo-app my-app --template blank

### 2. Projeyi başlat

    cd my-app
    npx expo start

> Not: Bu proje Expo ile hazırlanmıştır. Bilgisayarında Expo CLI yüklü olmalıdır.
---

## 🧠 Öğrenilen Konular

- React Native'de \`useState\` kullanımı
- Sayı artırma/azaltma mantığı
- \`Button\` bileşeni özellikleri (\`color\`, \`onPress\`, \`touchSoundDisabled\`)
- Dinamik veri güncelleme ve anlık render

---
## 📁 Klasör Yapısı

\`\`\`
📁 Proje klasörü
├── App.js
├── package.json
└── ...
\`\`\`

---

## 📬 Katkı

Geliştirme önerilerin varsa veya katkı sunmak istersen PR gönderebilirsin 🙌
EOF
