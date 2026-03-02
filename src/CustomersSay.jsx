import Girl from './girl.png';

function CustomersSay() {
    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p>Rating: ⭐⭐⭐⭐⭐</p>
                    <img src={Girl} alt="customer" />
                    <h4>Sara Lopez</h4>
                    <p>"The best Mediterranean food in Chicago!"</p>
                </div>
            </div>
        </section>
    );
}
export default CustomersSay;