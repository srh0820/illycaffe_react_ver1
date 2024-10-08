import React from 'react'
import { Link } from 'react-router-dom';

import shopscss from './scss/shop.module.scss';
import Shopswiper from './shop/Shopswiper';
import Button from './styled/Button';

function Shop() {
    return (
        <section className={shopscss.shop}>
            <div className={shopscss.shopdiv}>
                <div className={shopscss.shoptext}>
                    <h2>Meet The Machines & Coffee</h2>
                    <p className="mb-0">
                        <span className={shopscss.default_text}>
                            일리 커피는 완벽한 커피 한 잔의 즐거움을 중심으로 정보, 경험, 맛과 과학 및 예술의 세계를 구축했습니다. <br />
                            커피 머신과 디자이너 컵 그리고 액세서리들이 준비되어 있습니다.
                        </span>
                        <span className={shopscss.short_text}>
                            일리 커피는 완벽한 커피 한 잔의 즐거움을 중심으로 <br />
                            정보, 경험, 맛과 과학 및 예술의 세계를 구축했습니다.<br />
                        </span>
                    </p>
                    <Button as={Link} to="/Subpage" className={`${shopscss.btn} mb-5`}>
                        자세히보기
                    </Button>
                </div>
                
                <Shopswiper></Shopswiper>

            </div>
        </section>
    );
};

export default Shop;
