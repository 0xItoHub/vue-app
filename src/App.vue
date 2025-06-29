<template>
  <div class="p-4 bg-green-500 text-white">Tailwind OK?</div>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <main class="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <!-- ヘッダー -->
      <div class="text-center mb-8 animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          🗨️ ポートフォリオ Bot
        </h1>
        <p class="text-gray-600 text-lg">あなたのポートフォリオを楽しく紹介します</p>
      </div>
      
      <!-- チャットボット -->
      <div class="w-full max-w-2xl animate-slide-up">
        <ChatBot />
      </div>
      
      <!-- フッター -->
      <footer class="mt-8 text-center text-gray-500 text-sm animate-fade-in">
        <p>Made with ❤️ using Vue 3 + Vite</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import ChatBot from "./components/ChatBot.vue";
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s both;
}
</style> 
