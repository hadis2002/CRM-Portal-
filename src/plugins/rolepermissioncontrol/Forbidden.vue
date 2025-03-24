<template>
    <div class="fixed inset-0 w-[100dvw] h-[100dvh] z-[99999] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50 gap-4">
        <svg class="w-32 h-32 mb-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    
        <h1 class="text-5xl font-bold text-gray-800 mb-4">  عدم دسترسی </h1>
        <p class="text-2xl text-gray-600 mb-8 text-center">
            شما مجوز لازم برای ورود به این بخش را ندارید 
        </p>
    
        <div class="flex gap-4">
            <button @click="go_home" class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                بازگشت به خانه
            </button>
            <button onclick="window.history.back()" class="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
                بازگشت
            </button>
        </div>
    </div>
    </template>
    
    <script setup>
    const go_home = () => {
        window.location.href = import.meta.env.VITE_CRM_URL
    }
    </script>
    