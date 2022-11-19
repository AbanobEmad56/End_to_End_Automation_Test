Feature: Login

  Scenario: 1- Login with valid Account
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP 
    And I click on "تأكيد"
    And I fill The Password #Pin Cose
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    
    Scenario: 2- Login with invalid Account
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "5689"
    And I click on "تسجيل الدخول"
    Then I should see "من فضلك ادخل رقمك الهاتفي الصحيح"

    Scenario: 3- Login with valid Account with wrong otp number
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill invalid pin Code
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"

    Scenario: 4- Login with valid Account with wrong Password
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill invalid OTP
    And I click on "تأكيد"
    And I fill ivalid Password
    And I click on "تسجيل الدخول"
    Then I should see "خطأ في رقم الجوال أو الرقم السري"