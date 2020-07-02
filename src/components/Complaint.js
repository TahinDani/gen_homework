import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Breadcrumb from './Breadcrumb'
import '../styles/Complaint.css'

class Complaint extends Component {

    validateFields = (values) => {
        const errors = {}
        const required = ["name", "bondNumber", "contractType", "complaintText"]
        for (let field of required) {
            if (!values[field]) {
                errors[field] = "Kötelező mező"
            }
        }
        if (!(values.phoneNumber || values.email)) {
            errors.phoneNumber = "Legalább az egyik megadása kötelező"
            errors.email = "Legalább az egyik megadása kötelező"
        }
        return errors
    }

    handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    render() {
        return (
            <div className="Complaint">
                <Breadcrumb crumbs={["Kapcsolat", "Online ügyintézés", "Panaszbejelentés"]} />
                <div className="content-container">
                <h2>Panasz bejelentés</h2>
                <div className="Complaint-text">
                    <div className="Complaint-text-info">
                        <p>Tisztelt Ügyfelünk!</p>
                        <p>Minden igyekezetünk ellenére előfordulhat, hogy nem teljes mértékben elégedett termékeinkkel, szolgáltatásainkkal. Kérjük, hogy a következő űrlap kitöltésével jelezze számunkra az Ön által tapasztalt problémát!</p>
                        <p>A Generali Biztosító Zrt. panaszkezelésre vonatkozó eljárási szabályait valamint Felügyeleti szervünk elérhetőségét Panaszkezelési Szabályzatunk tartalmazza</p>
                        <p><strong>Az alábbi űrlapon 2000 karakter hosszú bejelentést tud tenni.</strong> Amennyiben ettől hosszabb üzenetet kíván küldeni, vagy bejelentéséhez dokumentumot szeretne csatolni, kérjük a generali.hu@generali.com e-mail címre küldje panaszát.</p>
                    </div>
                    <div className="Complaint-text-links">
                        <div className="links-title">MNB fontos linkek</div>
                        <div className="links-link">MNB panaszkezelési eljárás</div>
                        <div className="links-link">Formanyomtatványok MNB-hez történő fogyasztóvédelmi panasz benyújtásához</div>
                        
                        <div className="links-title">Európai online vitarendezési platform</div>
                        <div className="links-link">Tájékoztató</div>
                        <div className="links-link">Online vitarendezési platform</div>

                        <div className="links-title">Kapcsolódó oldalak</div>
                        <div className="links-link">Tudatos fogyasztó</div>

                        <div className="links-title">Letölthető dokumentumok</div>
                        <div className="links-link">Panaszkezelési szabályzat ügyfelek részére</div>
                    </div>
                </div>
                <div className="separator"></div>
                <Formik
                initialValues={{ name: '', phoneNumber: '', email: '', bondNumber: '', contractType: '', complaintText: ''}}
                validateOnChange={false}
                validate={this.validateFields}
                onSubmit={this.handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="Complaint-form">
                            
                                <div className="form-section contact">
                                    <div className="form-section-title">Bejelentő adatai</div>
                                    <div className="form-item">
                                        <label htmlFor="name">Bejelentő neve: *</label>
                                        <Field name="name" />
                                        <ErrorMessage className="form-error" name="name" component="div" />
                                    </div>
                                    <div className="common-label">Elérhetőség *</div>
                                    <div className="common-label-sub">Legalább az egyik megadása kötelező</div>
                                    <div className="form-item">
                                        <label htmlFor="phoneNumber">Telefonszám:</label>
                                        <Field name="phoneNumber" />
                                        <ErrorMessage className="form-error" name="phoneNumber" component="div" />
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="email">Email cím:</label>
                                        <Field name="email" />
                                        <ErrorMessage className="form-error" name="email" component="div" />
                                    </div>
                                </div>

                                <div className="form-section contract-data">
                                    <div className="form-section-title">Szerződés adatai</div>
                                    <div className="form-item">
                                        <label htmlFor="bondNumber">Kötvényszám: *</label>
                                        <Field name="bondNumber" />
                                        <ErrorMessage className="form-error" name="bondNumber" component="div" />
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="contractType">Szerződés típusa: *</label>
                                        <Field name="contractType" as="select">
                                            <option value="life">Életbiztosítás</option>
                                            <option value="health">Egészség és balesetbiztosítás</option>
                                            <option value="casco">Casco</option>
                                        </Field>
                                        <ErrorMessage className="form-error" name="contractType" component="div" />
                                    </div>
                                </div>

                                <div className="form-section complaint">
                                    <div className="form-section-title">Panasz leírása *</div>
                                    <div className="form-item">
                                        <Field name="complaintText" as="textarea" rows="16"/>
                                        <ErrorMessage className="form-error" name="complaintText" component="div" />
                                    </div>
                                </div>
                                
                                <button className="form-submit" type="submit" disabled={isSubmitting}>
                                    Panasz küldése
                                </button>

                                <p className="form-info">Az Ön által megadott adatok SSL-en (Secure Socket Layer) keresztül jutnak el a biztosítóhoz, ami garantálja, hogy az interneten keresztül továbbított adatok harmadik személy számára ne legyenek hozzáférhetőek.</p>
                        </Form>
                    )}
                </Formik>
                </div>
            </div>
        );
    }
}

export default Complaint;