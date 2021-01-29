import s from './style.module.css';

const Layout = ({ id, title, desc, colorBg = '', urlBg = ''}) => {
    let bgImg = (urlBg) ? `url(${urlBg})` : '';
    return (
        <section className={ s.root } id={ id } style={{ 'backgroundColor': `${colorBg}`, 'backgroundImage': `${bgImg}` }}>
            <div className={ s.wrapper }>
                <article>
                    <div className={ s.title }>
                        {
                            title && (<h3>{ title }</h3>)
                        }
                        <span className={ s.separator }></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {
                            desc && (<p>{ desc }</p>)
                        }
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;