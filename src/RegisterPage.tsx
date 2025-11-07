import React from 'react';

function RegisterPage() {
// two state items: username and uk mobile number
const [username, setUsername] = React.useState("");
const [mobile, setMobile] = React.useState("");

// two state items for username and mobile error messages
const [usernameError, setUsernameError] = React.useState("");
const [mobileError, setMobileError] = React.useState("");

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"
            value={username}
            onChange={(e) => {
                const value = e.target.value;
                setUsername(value)

                // validate username length, must be at least 8 characters long, must have at least one uppercase letter, one lowercase letter, one number and one special character
               const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
               if (!usernameRegex.test(value)) {
                setUsernameError('Username must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character');
               } else {
                setUsernameError('');
               }
            }
        }
          />
            {usernameError && <p style={{color: 'red'}}>{usernameError}</p>}
        </div>

        <div>
          <label htmlFor="mobile">UK mobile mumber:</label>
          <input type="tel" id="mobile" name="mobile" 
          value={mobile}
          onChange={(e) => {
            const value = e.target.value;
            setMobile(value)

            // validate UK mobile number must start with +44 or 07 and be 11 digits long
            const mobileRegex = /^(?:\+44|07)\d{9}$/;
            if (!mobileRegex.test(value)) {
                setMobileError('Mobile number must start with +44 or 07 and be 11 digits long');
            } else {
                setMobileError('');
            }
        }}
          />
            {mobileError && <p style={{color: 'red'}}>{mobileError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;