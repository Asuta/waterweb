// 多语言数据
const translations = {
    zh: {
        nav: {
            home: "首页",
            features: "特性",
            demo: "应用",
            download: "下载",
            contact: "联系"
        },
        hero: {
            subtitle: "Unity水浮力模拟解决方案",
            description: "专为Unity开发者设计的高性能水浮力模拟插件，让游戏中的物体与水面产生真实的物理交互。",
            downloadBtn: "在Unity Asset Store下载",
            demoBtn: "查看应用"
        },
        video: {
            notSupported: "您的浏览器不支持视频播放。"
        },
        features: {
            title: "核心特性",
            easyUse: {
                title: "易于使用",
                desc: "只需几个步骤即可完成设置，无需复杂的配置过程。"
            },
            performance: {
                title: "高性能",
                desc: "使用Unity Job System和Burst编译器优化计算，确保稳定的性能表现。"
            },
            customizable: {
                title: "高度可定制",
                desc: "可调节浮力点数量、分布和浸没百分比等参数。"
            },
            support: {
                title: "全面支持",
                desc: "兼容平面水面和基于触发器的水体积。"
            },
            visualization: {
                title: "直观可视化",
                desc: "在Scene视图中可视化浮力点，便于调试和优化。"
            },
            updates: {
                title: "持续更新",
                desc: "持续的性能优化和兼容性改进。"
            }
        },
        tech: {
            title: "技术亮点",
            pointBased: {
                title: "基于点的浮力系统",
                desc: "自动在任何网格上生成交互点，这些点计算与水面的交互力，实现精确的浮力模拟。"
            },
            jobSystem: {
                title: "Unity Job System优化",
                desc: "利用Unity的Job System和Burst编译器进行高效计算，即使在有大量浮动物体的场景中也能保持稳定性能。"
            },
            performance: {
                title: "业界领先性能",
                desc: "\"可能是Asset Store中性能最佳的水物理模拟插件\""
            }
        },
        demo: {
            title: "应用场景",
            naval: {
                title: "航海游戏",
                desc: "为船只和海上载具提供真实的水面交互体验。"
            },
            puzzle: {
                title: "物理解谜",
                desc: "创建基于水的物理解谜游戏机制。"
            },
            general: {
                title: "任何需要水交互的项目",
                desc: "为任何需要水面交互的游戏项目提供高质量、易实现的解决方案。"
            }
        },
        download: {
            title: "立即获取YoYoWater",
            desc: "在Unity Asset Store上获取这个强大的水浮力模拟插件",
            btn: "前往Unity Asset Store"
        },
        contact: {
            title: "联系我们",
            email: "邮箱",
            assetStore: "Asset Store",
            discord: "Discord"
        },
        footer: {
            copyright: "© 2024 YoYoWater. 保留所有权利。"
        }
    },
    en: {
        nav: {
            home: "Home",
            features: "Features",
            demo: "Applications",
            download: "Download",
            contact: "Contact"
        },
        hero: {
            subtitle: "Unity Water Buoyancy Simulation Solution",
            description: "A high-performance water buoyancy simulation plugin designed for Unity developers, enabling realistic physical interactions between objects and water surfaces in games.",
            downloadBtn: "Download from Unity Asset Store",
            demoBtn: "View Applications"
        },
        video: {
            notSupported: "Your browser does not support video playback."
        },
        features: {
            title: "Core Features",
            easyUse: {
                title: "Easy to Use",
                desc: "Setup in just a few steps without complex configuration processes."
            },
            performance: {
                title: "High Performance",
                desc: "Optimized with Unity Job System and Burst compiler for stable performance."
            },
            customizable: {
                title: "Highly Customizable",
                desc: "Adjustable buoyancy point count, distribution, and submersion percentage parameters."
            },
            support: {
                title: "Comprehensive Support",
                desc: "Compatible with flat water surfaces and trigger-based water volumes."
            },
            visualization: {
                title: "Intuitive Visualization",
                desc: "Visualize buoyancy points in Scene view for easy debugging and optimization."
            },
            updates: {
                title: "Continuous Updates",
                desc: "Ongoing performance optimizations and compatibility improvements."
            }
        },
        tech: {
            title: "Technical Highlights",
            pointBased: {
                title: "Point-Based Buoyancy System",
                desc: "Automatically generates interaction points on any mesh that calculate interaction forces with water surfaces for precise buoyancy simulation."
            },
            jobSystem: {
                title: "Unity Job System Optimization",
                desc: "Utilizes Unity's Job System and Burst compiler for efficient computation, maintaining stable performance even in scenes with many floating objects."
            },
            performance: {
                title: "Industry-Leading Performance",
                desc: "\"Possibly the best performing water physics simulation plugin on the Asset Store\""
            }
        },
        demo: {
            title: "Application Scenarios",
            naval: {
                title: "Naval Games",
                desc: "Provides realistic water surface interaction experiences for ships and marine vehicles."
            },
            puzzle: {
                title: "Physics Puzzles",
                desc: "Create water-based physics puzzle game mechanics."
            },
            general: {
                title: "Any Water Interaction Projects",
                desc: "Provides high-quality, easy-to-implement solutions for any game projects requiring water surface interactions."
            }
        },
        download: {
            title: "Get YoYoWater Now",
            desc: "Get this powerful water buoyancy simulation plugin on Unity Asset Store",
            btn: "Go to Unity Asset Store"
        },
        contact: {
            title: "Contact Us",
            email: "Email",
            assetStore: "Asset Store",
            discord: "Discord"
        },
        footer: {
            copyright: "© 2024 YoYoWater. All rights reserved."
        }
    }
};

// 当前语言
let currentLanguage = 'en'; // 默认英语

// 检测用户首选语言
function detectUserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('zh')) {
        return 'zh';
    }
    return 'en';
}

// 更新页面文本
function updatePageText(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let text = translations[lang];

        for (const k of keys) {
            text = text[k];
            if (!text) break;
        }

        if (text) {
            element.textContent = text;
        }
    });

    // 更新页面标题
    const titles = {
        zh: "YoYoWater - Unity水浮力模拟插件",
        en: "YoYoWater - Unity Water Buoyancy Simulation Plugin"
    };
    document.title = titles[lang];

    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// 切换语言
function switchLanguage(lang) {
    currentLanguage = lang;
    updatePageText(lang);

    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // 保存到本地存储
    localStorage.setItem('preferred-language', lang);
}

// 语言切换按钮事件
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// 初始化语言
function initializeLanguage() {
    // 优先级：本地存储 > 用户首选语言 > 默认英语
    const savedLang = localStorage.getItem('preferred-language');
    const detectedLang = detectUserLanguage();
    const initialLang = savedLang || detectedLang;

    switchLanguage(initialLang);
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 移动端菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 关闭移动端菜单
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有卡片添加滚动动画
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .demo-card, .contact-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// 初始化页面透明度
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// 水波纹点击效果
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// 为按钮添加水波纹效果
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
});

// CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: #1e293b;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.3);
            padding: 2rem 0;
            border-top: 1px solid rgba(51, 65, 85, 0.3);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;
document.head.appendChild(style);

// 添加鼠标跟随效果（可选）
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// 为浮动元素添加轻微的鼠标跟随效果
const floatingElements = document.querySelectorAll('.floating-box, .floating-sphere');
floatingElements.forEach(element => {
    element.addEventListener('mousemove', function(e) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    element.addEventListener('mouseleave', function() {
        element.style.transform = 'translate(0, 0)';
    });
});

// 添加打字机效果（可选）
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();

    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    typeWriter(heroTitle, "YoYoWater", 150);
});
