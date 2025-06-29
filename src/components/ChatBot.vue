<template>
  <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
    <!-- チャットヘッダー -->
    <div class="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span class="text-2xl">🤖</span>
        </div>
        <div>
          <h3 class="text-white font-semibold">ポートフォリオ Bot</h3>
          <p class="text-blue-100 text-sm">オンライン</p>
        </div>
      </div>
    </div>

    <!-- チャットメッセージエリア -->
    <div class="h-96 overflow-y-auto p-4 space-y-4" ref="chatContainer">
      <ChatMessage
        v-for="(m, i) in messages"
        :key="i"
        :text="m.text"
        :is-bot="m.isBot"
        :index="i" />

      <!-- タイピングインジケーター -->
      <div v-if="isTyping" class="flex items-center space-x-2 animate-pulse">
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-lg">🤖</span>
        </div>
        <div class="flex space-x-1">
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
          <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
        </div>
      </div>
    </div>

    <!-- 選択肢ボタンエリア -->
    <div class="border-t border-gray-100 p-4 bg-gray-50">
      <OptionButtons
        v-if="current.options"
        :options="current.options"
        @select="handleSelect" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, nextTick, watch } from "vue";
import scenario from "../data/scenario.json";
import ChatMessage from "./ChatMessage.vue";
import OptionButtons from "./OptionButtons.vue";

// 会話ステート
const state = reactive({
  step: "start",
  history: [],
});

const current = computed(() => scenario[state.step]);
const chatContainer = ref(null);
const isTyping = ref(false);

// 現在のメッセージ群を生成
const messages = computed(() => [
  ...state.history,
  { text: current.value.message, isBot: true },
]);

// チャットを最下部にスクロール
async function scrollToBottom() {
  await nextTick();
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
  }
}

// メッセージが追加されたらスクロール
watch(messages, () => {
  scrollToBottom();
}, { deep: true });

async function handleSelect(opt) {
  // 外部リンクなら新規タブで開く
  if (opt.link) {
    window.open(opt.link, "_blank");
    return; // ステップは進めない
  }
  
  // タイピングアニメーション
  isTyping.value = true;
  
  // ユーザー発話を履歴に追加
  state.history.push({ text: opt.label, isBot: false });
  
  // 少し待ってから次のメッセージを表示
  setTimeout(() => {
    state.step = opt.next;
    isTyping.value = false;
  }, 1000);
}

// 初期スクロール
scrollToBottom();
</script> 