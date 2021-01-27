import s from './style.module.css';

const Layout = ({ id, title, desc, colorBg, urlBg}) => {
    let bgColor = ( colorBg ) ? colorBg : '';
    let bgImg = ( urlBg ) ? urlBg : '';
    return (
        <section className={ s.root } id={ id } style={{ 'backgroundColor': `${bgColor}`, 'backgroundImage': `url(${bgImg})` }}>
            <div className={ s.wrapper }>
                <article>
                    <div className={ s.title }>
                        {
                            title && (<h3>{ title }</h3>)
                        }
                        <span className={ s.separator }></span>
                    </div>
                    <div className={ s.desc + s.full}>
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