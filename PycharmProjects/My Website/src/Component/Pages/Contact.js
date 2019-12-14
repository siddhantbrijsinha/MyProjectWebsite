import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from 'formik';
import * as Yup from 'yup';

const field = {
  section: [
    [
      {
        name: "name",
        placeholder: "Your Name",
        elementName: "input",
        type: "text"
      },
      {
        name: "email",
        placeholder: "Your email",
        elementName: "input",
        type: "text"
      },
      {
        name: "phone",
        placeholder: "Your phone Number",
        elementName: "input",
        type: "text"
      }
    ],
    [
      {
        name: "message",
        placeholder: "Type Your Message",
        elementName: "textarea",
        type: "text"
      }
    ]
  ]
};

class Contact extends Component {

  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form
                id="contactForm"
                onSubmit={this.props.handleSubmit}
                name="sentMessage"
                novalidate = "novalidate"
              >
                <div className="row">
                  {field.section.map((section, sectionIndex) => {
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              value = {this.props.values[field.name]}
                              name ={field.name}
                              onChange = {this.props.handleChange}
                              onBlur ={this.props.handleBlur}
                              touched= {(this.props.touched[field.name])}
                              error = {this.props.errors[field.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () =>({
      name:'',
      email:'',
      phone:'',
      message:'',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, 'Too Small').required('you must give us Your Name'),
    email: Yup.string().email("Not a Valid Email").required('We need email'),
    phone: Yup.string().min(10, 'Please Provide Valid Number')
          .max(15, "too long").required("Number de"),
    message: Yup.string().min(500, "Likho").required('Message is Required')
  }),
  handleSubmit: (values, {setSubmitting}) =>{
    alert("you've Submitted this", JSON.stringify(values));
  }
})(Contact);
