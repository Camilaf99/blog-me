function signUp() {
    const usernameInput = $("#usernameInput");
    const passwordInput = $("#passwordInput");

    const username = usernameInput.val();
    const password = passwordInput.val();

    let valid = true;
    let errorMessage = "<ul>";

    if(!username) {
        valid = false;
        usernameInput.css('background-color' , '#FF0000');
        errorMessage = errorMessage + "<li>User is required</li>";
    }
    if(!password) {
        valid = false;
        passwordInput.css('background-color' , '#FF0000');
        errorMessage = errorMessage + "<li>Password is required</li>";
    }

    if(valid) {
        // call API
        const requestBody = { user_name: username, password: password };
        $.ajax({
            type: 'post',
            url: './api/users/',
            data: JSON.stringify(requestBody),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                $("#signUpForm").hide();
                const messageBlock = $("#signUpMessage");
                messageBlock.html("User successfully created");
                messageBlock.show();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $("#signUpForm").hide();
                const messageBlock = $("#signUpMessage");
                messageBlock.html("Problems while creating user");
                messageBlock.show();
            }
        });
    } else {
        errorMessage = errorMessage + "</ul>";
        const errorMessageBlock = $("#errorMessage");
        errorMessageBlock.html(errorMessage);
        errorMessageBlock.show();
    }
}