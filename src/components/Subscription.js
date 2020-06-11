import React from 'react';
import {
    Form,
    FormGroup,
    Input,
    Card,
    CardTitle,
    CardBody
  } from 'reactstrap'
  import addToMailchimp from 'gatsby-plugin-mailchimp';

  export default class Subscription extends React.Component {
      state = {
          name: null,
          email: null,
      }
  
      _handleChange = (e) => {
          console.log({
              [`${e.target.name}`]: e.target.value,
          });
          this.setState({
              [`${e.target.name}`]: e.target.value,
          });
      }
  
      _handleSubmit = (e) => {
          e.preventDefault();
  
          console.log('submit', this.state);
  
          addToMailchimp(this.state.email, this.state)
              .then(({ msg, result }) => {
                  console.log('msg', `${result}: ${msg}`);
  
                  //if (result !== 'success') {
                  //    throw msg;                      
                  //}
                  //alert(msg);
                  var cm_msg = ''
                  var pos = `${msg}`.indexOf("<a")
                  if (pos < 0 ) {
                    cm_msg = `${msg}`.substring(0);
                  } else {
                    cm_msg = `${msg}`.substring(0,pos);
                  }
                  
                  console.log('cmmsg', `${pos}: ${cm_msg}`);
                  document.getElementById('message').style.display = "block";
                  document.getElementById('message').innerHTML = cm_msg;

                  setTimeout(function(){ 
                    document.getElementById("message").innerHTML = "";
                  }, 8000);

                  setTimeout(function(){ 
                    document.getElementById("email").value = "email";
                  }, 8000);                  

              })
              .catch((err) => {
                  console.log('err', err); 
                  alert(err);
              });
      }

      render() {
        return (
            <Card>
                <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Newsletter
                </CardTitle>
                    <Form className="text-center" onSubmit={this._handleSubmit}>
                        <FormGroup>
                        <Input
                            id="email"
                            type="email"
                            onChange={this._handleChange}
                            placeholder="email"
                            name="email"
                        />
                        <label htmlFor="email" id="message" style={{color: 'green'}}></label>
                        </FormGroup>
                        <button className="btn btn-outline-success text-uppercase" type="submit">
                            Suscribete
                        </button>
                        
                    </Form>
                </CardBody>
            </Card>
        )
      }

};
