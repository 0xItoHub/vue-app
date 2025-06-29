<template>
  <div class="space-y-3">
    <p class="text-sm text-gray-600 font-medium mb-3">選択してください：</p>
    <div class="grid gap-3">
      <button
        v-for="(o, i) in options"
        :key="i"
        class="group relative overflow-hidden px-6 py-4 rounded-xl border-2 border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-left"
        @click="$emit('select', o)">
        
        <!-- グラデーション背景（ホバー時） -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <!-- ボタンコンテンツ -->
        <div class="relative z-10 flex items-center justify-between">
          <span class="font-medium transition-colors duration-300 group-hover:text-white">{{ o.label }}</span>
          
          <!-- アイコン -->
          <div class="flex items-center space-x-2">
            <span v-if="o.link" class="text-blue-500 group-hover:text-white transition-colors duration-300">
              🔗
            </span>
            <svg class="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
        
        <!-- リップルエフェクト -->
        <div class="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({ options: Array });
defineEmits(["select"]);
</script> 