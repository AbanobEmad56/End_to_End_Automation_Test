Feature: Create Contract

  Scenario: 1- Create New Contract with valid data any pay for it 
    # Given I am not logged in
    # When I go to Waffy Website
    # And  I Enter my Mobile number "568999999"
    # And I click on "تسجيل الدخول"
    # And I fill The OTP
    # And I click on "تأكيد"
    # And I fill The Password
    # And I click on "تسجيل الدخول"
    # Then I should see "المعاملات النشطة"
    # When I click on "بدء معاملة جديدة"
    # And I fill in item Name
    # And I fill in Product description
    # And I Attch product photo
    # And I click on "متابعة"
    # And I fill the itme price
    # And I activate delivary option
    # And I fill the delivary price
    # And I accept terms and condtions
    # And I click on "إنشاء المعاملة"
    # Then I should see "تم إنشاء المعاملة بنجاح"
    # And I should see "انسخ الرابط وشاركه مع عملائك"
    # When I click on "متابعة"
    # Then I should see "Test Product By Automation"
    # And I should see "That is an amazing product"
    # When open added contract
    # And Save Contact link
    # And Logout from Profile
    And I go to Waffy Website
    And I Enter my Mobile number "568123456"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    And Open contract page
    And I click on "اشتري الآن"
    And choose payment method
    And I fill The Password
    And I Confirm Payment
    And I enter payment details
    And Open contract page