<template>
  <div
    class="flex items-end space-x-2 animate-message-in"
    :class="isBot ? 'justify-start' : 'justify-end'">
    
    <!-- アバター -->
    <div
      v-if="isBot"
      class="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
      <span class="text-white text-sm font-bold">🤖</span>
    </div>
    
    <!-- メッセージバルーン -->
    <div
      class="max-w-xs md:max-w-md px-4 py-3 rounded-2xl shadow-sm relative"
      :class="isBot 
        ? 'bg-white border border-gray-200 text-gray-800' 
        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'">
      
      <!-- メッセージテキスト -->
      <p class="text-sm leading-relaxed">{{ text }}</p>
      
      <!-- バルーンの尻尾 -->
      <div
        class="absolute bottom-0 w-3 h-3 transform rotate-45"
        :class="isBot 
          ? 'left-0 -ml-1.5 bg-white border-l border-b border-gray-200' 
          : 'right-0 -mr-1.5 bg-gradient-to-r from-blue-500 to-purple-600'">
      </div>
    </div>
    
    <!-- ユーザーアバター -->
    <div
      v-if="!isBot"
      class="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
      <span class="text-white text-sm font-bold">👤</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  isBot: Boolean,
  index: Number,
});
</script>

<style scoped>
@keyframes message-in {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-message-in {
  animation: message-in 0.3s ease-out;
}
</style> 