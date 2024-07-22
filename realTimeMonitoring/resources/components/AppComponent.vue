<template>
    <div class="container">
        <div class="header">
            <h1>실시간지역별날씨모니터링사이트제목</h1>
            <div class="date-container">
                <div>날짜를 선택해주세요.</div>
                <div class="date-select">
                    <button id="prev-day"><</button>
                    <input type="date" id="date-input">
                    <button id="next-day">></button>
                </div>
            </div>
        </div>
        <div class="main-top">
            <div class="item-container">
                <div class="item">
                    <div class="game">
                        게임 정보
                    </div>
                    <div class="region">
                        지역 정보
                    </div>
                    <div class="wether-icon">
                        날씨 아이콘
                    </div>
                    <div>
                        날씨:
                    </div>
                </div>
                <div class="item">
                    fgdg
                </div>
                <div class="item">
                    fgdg
                </div>
                <div class="item">
                    fgdg
                </div>
                <div class="item">
                    fgdg
                </div>
            </div>
        </div>
        <div class="main-bottom">
            <div class="item-detail">
                <div class="game">
                    게임 정보
                </div>
                <div class="region">
                    지역 정보
                </div>
                <div class="wether-icon">
                    날씨 아이콘
                </div>
                <div>
                    날씨:
                </div>
                <div >
                    흐림 정도: 
                </div>
                <div>
                    풍속: 
                </div>
                <div>
                    현재 온도: 
                </div>
                <div>
                    체감 온도: 
                </div>
                <div>
                    최저 기온: 
                </div>
                <div>
                    최고 기온: 
                </div>
                <div>
                    습도: 
                </div>
                <div>
                    문구
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    function getTodayDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        // 특정 날짜로부터 days 만큼 더한 날짜를 반환하는 함수
        function addDays(date, days) {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result.toISOString().split('T')[0];
        }

        // 초기화
        document.addEventListener('DOMContentLoaded', () => {
            const dateInput = document.getElementById('date-input');
            const prevDayButton = document.getElementById('prev-day');
            const nextDayButton = document.getElementById('next-day');

            // 오늘 날짜로 기본값 설정
            dateInput.value = getTodayDate();

            // 이전 날로 변경
            prevDayButton.addEventListener('click', () => {
                dateInput.value = addDays(dateInput.value, -1);
            });

            // 다음 날로 변경
            nextDayButton.addEventListener('click', () => {
                dateInput.value = addDays(dateInput.value, 1);
            });
        });

        // OpenWeatherMap API에 필요한 정보
        const API_KEY = '88797363030fb80929d9ac1a0a4bfc55';
        const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

        // 화면에 표시될 날씨 상태의 이름
        const weather = [
        '현재 온도',
        '체감 온도',
        '최저 기온',
        '최고 기온',
        '기압',
        '습도',
        ];


    
</script>

<style>
    @import url(../css/app.css);
</style>