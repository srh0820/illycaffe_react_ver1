import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import cpscss from './scss/company.module.scss';
import Comswiper from './company/Comswiper';
import Button from './styled/Button';

function Company() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = document.querySelector(`.comtext`);

        if (element) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1 // 10%
                }
            );

            observer.observe(element);

            return () => {
                observer.unobserve(element);
            };
        }
    }, []);

    return (
        <section className={cpscss.company}>
            <div className={cpscss.comdiv}>
                <div className={`${cpscss.comtext} comtext ${isVisible ? cpscss.visible : ''}`}>
                    <h2 className='mb-4'>
                        <span className={cpscss.default_text}> 
                            일리는 혁신과 직관, 전문성으로 탄생된 아주 특별한 <br />
                            커피 브랜드입니다. 일리만의 맛과 느낌, 아로마 향이 있습니다. <br />
                            이것은 일리의 사명이자 열정, 그리고 의무입니다.
                        </span>
                        <span className={cpscss.short_text}>   
                            일리는 혁신, 직관, 전문성으로 탄생된 커피 브랜드입니다. <br />
                            일리만의 맛과 느낌, 아로마 향이 있습니다. <br />
                            이것은 일리의 사명이자 열정, 그리고 의무입니다.
                        </span>
                    </h2>
                    <Button as={Link} to="/Subpage" className={`${cpscss.btn} mb-5`}>
                        자세히보기
                    </Button>
                </div>

                <Comswiper />
            </div>
        </section>
    );
}

export default Company;
