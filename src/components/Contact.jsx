import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            // Replace with your API endpoint or logic
            await axios.post('/send-email', formData);
            setAlert({ show: true, type: 'success', message: 'Message sent successfully!' });
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        } catch (error) {
            setAlert({ show: true, type: 'danger', message: 'Something went wrong. Please try again!' });
        }
    };

    return (
        <div>
            <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span className="subtitle">Contact</span>
                                <h2 className="title">Contact With US</h2>
                            </div>
                        </div>
                    </div>

                    {alert.show && (
                        <div className={`alert alert-${alert.type} mt-4`} role="alert">
                            {alert.message}
                        </div>
                    )}

                    <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                        <div data-aos-delay="600" className="col-12 contact-input">
                            <div className="contact-form-wrapper">
                                <div className="introduce">
                                    <form className="rnt-contact-form rwt-dynamic-form row" onSubmit={handleSubmit}>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Your Name</label>
                                                <input
                                                    className="form-control form-control-lg"
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input
                                                    className="form-control"
                                                    name="phone"
                                                    id="phone"
                                                    type="text"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="subject">Subject</label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    id="subject"
                                                    name="subject"
                                                    type="text"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="10"
                                                    className="form-control"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" className="rn-btn">
                                                <span>SEND MESSAGE</span>
                                                <i data-feather="arrow-right"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
