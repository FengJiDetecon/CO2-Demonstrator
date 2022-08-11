<template>
    <div class="corousel">
        <slot :currentSlide="currentSlide"></slot>
        <div class="navi_pagi">
            <div class="navigation">
                <div class="toggle-page left">
                    <i @click="previousSlide" class="fas fa-chevron-left"></i>
            </div>
            <div class="toggle-page right">
                <i @click="nextSlide " class="fas fa-chevron-right"></i>
            </div>
        </div>
        <div class="pagination">
            <span 
                v-for="(slide, index) in getSlideCount" 
                @click="goToSlide(index + 1)"
                :key= "index" 
                :class="{ active : index + 1 === currentSlide}">
            </span>
        </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { onMounted } from 'vue';
export default {
    setup(){
        const currentSlide = ref(1);
        const getSlideCount = ref(null);

        // next slide
        const nextSlide = () => {
            if (currentSlide.value < getSlideCount.value) {
                currentSlide.value++;
            } else {
                currentSlide.value = 1;
            }
        };

        // previous slide
        const previousSlide = () => {
            if (currentSlide.value > 1) {
                currentSlide.value--;
            } else {
                currentSlide.value = getSlideCount.value;
            }
        };
        // go to slide
        const goToSlide = (index) => {
            currentSlide.value = index;
        };
        onMounted(() => {
            getSlideCount.value = document.querySelectorAll('.slide').length;
            console.log(getSlideCount.value);
        });
        return {
            currentSlide,
            getSlideCount,
            nextSlide,
            previousSlide,
            goToSlide,
        };
        }
}
</script>

<style lang="scss" scoped>
.navi_pagi {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
}
.navigation {
    padding: 16px 0px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content:center;
    align-items: center;

    .toggle-page {
        display: flex;
        flex: 1;
        padding: 16px;
    }
    .right {
        justify-content: flex-end;
    }
    i {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #6347c7;
        color: #fff;
        height: 2rem;
        width: 2rem;
    }
}
.pagination {
    position: absolute;
    bottom: 0;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    span {
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem; 
        border-radius: 50%;
        background-color: white;
    }
    .active {
        background-color: #6347c7;
        color: #6347c7;
    }
}
</style>