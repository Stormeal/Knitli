import { Component } from '@angular/core';
import swal from 'sweetalert2';
declare var $: any;

@Component({
    selector: 'app-sweetalert-cmp',
    templateUrl: 'sweetalert.component.html'
})

export class SweetAlertComponent {
    showSwal(type) {
      if (type == 'basic') {
          swal.fire({
              title: "Here's a message!",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-success"
              }
          });

      } else if (type == 'title-and-text') {
          swal.fire({
              title: "Here's a message!",
              text: "It's pretty, isn't it?",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-info"
              }
          });

      } else if (type == 'success-message') {
          swal.fire({
              title: "Good job!",
              text: "You clicked the button!",
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-success",
              },
              icon: "success"
          });

      } else if (type == 'warning-message-and-confirmation') {
          swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            customClass:{
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger',
            },
            confirmButtonText: 'Yes, delete it!',
             buttonsStyling: false
          }).then((result) => {
            if (result.value) {
              swal.fire(
                {
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success',
                  customClass:{
                    confirmButton: "btn btn-success",
                  },
                  buttonsStyling: false
                }
              )
            }
          })
      } else if (type == 'warning-message-and-cancel') {
          swal.fire({
              title: 'Are you sure?',
              text: 'You will not be able to recover this imaginary file!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, keep it',
              customClass:{
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
              },
              buttonsStyling: false
          }).then((result) => {
            if (result.value) {
              swal.fire({
                  title: 'Deleted!',
                  text: 'Your imaginary file has been deleted.',
                  icon: 'success',
                  customClass:{
                    confirmButton: "btn btn-success",
                  },
                  buttonsStyling: false
              });
            } else {
              swal.fire({
                  title: 'Cancelled',
                  text: 'Your imaginary file is safe :)',
                  icon: 'error',
                  customClass:{
                    confirmButton: "btn btn-info",
                  },
                  buttonsStyling: false
              });
            }
          })

      } else if (type == 'custom-html') {
          swal.fire({
              title: 'HTML example',
              buttonsStyling: false,
              customClass:{
                confirmButton: "btn btn-success",
              },
              html: 'You can use <b>bold text</b>, ' +
                  '<a href="http://github.com">links</a> ' +
                  'and other HTML tags'
          });

      } else if (type == 'auto-close') {
          swal.fire({
              title: "Auto close alert!",
              text: "I will close in 2 seconds.",
              timer: 2000,
              showConfirmButton: false
          });
      } else if (type == 'input-field') {
          swal.fire({
              title: 'Input something',
              html: '<div class="form-group">' +
                  '<input id="input-field" type="text" class="form-control" />' +
                  '</div>',
              showCancelButton: true,
              customClass:{
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
              },
              buttonsStyling: false
          }).then(function(result) {
              swal.fire({
                  icon: 'success',
                  html: 'You entered: <strong>' +
                      $('#input-field').val() +
                      '</strong>',
                  customClass:{
                    confirmButton: 'btn btn-success',
                  },
                  buttonsStyling: false

              })
          });
      }
    }
}
