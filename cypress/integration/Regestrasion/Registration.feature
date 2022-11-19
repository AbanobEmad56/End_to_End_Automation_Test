Feature: Registration

  Scenario: 1- Registration with valid Account
    Given I am not logged in
    When I go to Waffy Website
    And I Enter Rundom Mobile number
    And I click on "تسجيل الدخول"
    And I fill The pin Code
    And I click on "متابعة"
    And I Fill the First Name
    And I Fill the Last Name
    And I click on "متابعة"
    And I fill The Password
    And I click on "متابعة"
    And I click on "تخطي"
    And I Refresh the page
    Then I should see "بدء معاملة جديدة"
    
    Scenario: 2- Registration with invalid Account
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "5689"
    And  I click on "تسجيل الدخول"
    Then I should see "رقم الجوال غير صحيح"
    And I should see "من فضلك ادخل رقمك الهاتفي الصحيح"

    Scenario: 3- Registration with valid Account with wrong pin number
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter Rundom Mobile number
    And I click on "تسجيل الدخول"
    And I fill invalid pin Code
    And I click on "متابعة"
    Then I should see "كود التفعيل غير صحيح"


    
    Scenario: 4- Registration with valid Account without enter First Name
    Given I am not logged in
    When I go to Waffy Website
     And I Enter Rundom Mobile number
    And I click on "تسجيل الدخول"
    And I fill The pin Code
    And I click on "متابعة"
    And I Fill the Last Name
    And I click on "متابعة"
    Then I should see "خطأ في البيانات الشخصية"

    Scenario: 5- Registration with valid Account without enter Last Name
    Given I am not logged in
    When I go to Waffy Website
     And I Enter Rundom Mobile number
    And I click on "تسجيل الدخول"
    And I fill The pin Code
    And I click on "متابعة"
    And I Fill the First Name 
    And I click on "متابعة"
    Then I should see "خطأ في البيانات الشخصية"

    Scenario: 6- Registration with valid Account with invalid Password
    Given I am not logged in
    When I go to Waffy Website
    And I Enter Rundom Mobile number
    And I click on "تسجيل الدخول"
    And I fill The pin Code
    And I click on "متابعة"
    And I Fill the First Name
    And I Fill the Last Name
    And I click on "متابعة"
    And I fill invalid Password
    And I click on "متابعة"
    Then I should see "الرقم السري غير صحيح"


    Scenario: 7- Registration with valid Account with invalid Abshr number
    Given I am not logged in
    When I go to Waffy Website
    And I Enter Rundom Mobile number
    And I click on "تسجيل الدخول"
    And I fill The pin Code
    And I click on "متابعة"
    And I Fill the First Name
    And I Fill the Last Name
    And I click on "متابعة"
    And I fill The Password
    And I click on "متابعة"
    And I Fill the absher number
    And I click on confirm button
    Then I should see "رقم الهويةغير صحيح"

    