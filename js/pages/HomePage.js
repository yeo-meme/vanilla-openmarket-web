import Header from '../components/Header.js';
import HeroSlider from '../components/HeroSlider.js';
import ProductGrid from '../components/ProductGrid.js';

export default class HomePage {
    constructor() {
        this.header = new Header();
        this.heroSlider = new HeroSlider();
        this.productGrid = new ProductGrid();
        this.pageTitle = "pipi 홈페이지";
    }

    render() {
        const page = document.createElement('div');
        page.className = 'home-page';
        
        const headerSection = this.header.render();
        page.appendChild(headerSection);

        // 슬라이드 섹션 추가
        // page.appendChild(this.heroSlider.render());

        // 2. 상품 그리드 섹션
        const productSection = this.productGrid.render();
        page.appendChild(productSection);
        
        this.addPageAnimation(page);

        console.log('✅ HomePage 렌더링 완료: 슬라이더 + 상품그리드');
        
        return page;
    }
    addPageAnimation(page) {
        // 페이지 로드 애니메이션
        page.style.opacity = '0';
        page.style.transform = 'translateY(20px)';
        page.style.transition = 'all 0.5s ease';
        
        requestAnimationFrame(() => {
            page.style.opacity = '1';
            page.style.transform = 'translateY(0)';
        });
    }


    destroy() {
        console.log('HomePage 정리 시작');
        // 컴포넌트 정리
        if (this.heroSlider.destroy) this.heroSlider.destroy();
        if (this.productGrid.destroy) this.productGrid.destroy();
        console.log('HomePage 정리 완료');
    }
}