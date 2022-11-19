Feature: Create Contract

  Scenario: 1- Create New Contract with valid data
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I Attch product photo
    And I click on "متابعة"
    And I fill the itme price
    And I activate delivary option
    And I fill the delivary price
    And I accept terms and condtions
    And I click on "إنشاء المعاملة"
    Then I should see "تم إنشاء المعاملة بنجاح"
    And I should see "انسخ الرابط وشاركه مع عملائك"
    When I click on "متابعة"
    Then I should see "Test Product By Automation"
    And I should see "That is an amazing product"

    Scenario: 2- Create New Contract without Item price
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I Attch product photo
    And I click on "متابعة"
    And I activate delivary option
    And I fill the delivary price
    And I accept terms and condtions
    Then Create contract button should be Disabled 

    Scenario: 3- Create New Contract without Item Name
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in Product description
    And I Attch product photo
    Then Contanue button should be Disabled


  Scenario: 4- Create New Contract without item Discription
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I Attch product photo
    And I click on "متابعة"
    And I fill the itme price
    And I activate delivary option
    And I fill the delivary price
    And I accept terms and condtions
    And I click on "إنشاء المعاملة"
    Then I should see "تم إنشاء المعاملة بنجاح"
    And I should see "انسخ الرابط وشاركه مع عملائك"
    When I click on "متابعة"
    Then I should see "Test Product By Automation"
    And I should see "That is an amazing product"


    Scenario: 5- Create New Contract with without photo
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I click on "متابعة"
    And I fill the itme price
    And I activate delivary option
    And I fill the delivary price
    And I accept terms and condtions
    And I click on "إنشاء المعاملة"
    Then I should see "تم إنشاء المعاملة بنجاح"
    And I should see "انسخ الرابط وشاركه مع عملائك"
    When I click on "متابعة"
    Then I should see "Test Product By Automation"
    And I should see "That is an amazing product"

  Scenario: 6- Create New Contract with delivary price
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I Attch product photo
    And I click on "متابعة"
    And I fill the itme price
    And I activate delivary option
    And I accept terms and condtions
    Then Create contract button should be Disabled 

    
  Scenario: 7- Create New Contract withoout accept terms and condtions
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I Attch product photo
    And I click on "متابعة"
    And I fill the itme price
    And I activate delivary option
    And I fill the delivary price
    Then Create contract button should be Disabled 

    Scenario: 8- Create New Contract with more than maxmium delivery price 
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I Attch product photo
    And I click on "متابعة"
    And I fill the itme price
    And I activate delivary option
    And I fill the over delivary price
    Then I should see "لا يمكن إدخال رسوم الشحن التي تزيد عن 1000"

    Scenario: 9- Create New Contract with more than maxmium item price
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I Attch product photo
    And I click on "متابعة"
    And I fill the over itme price
    And I should see "لا يمكن إدخال سعر أكثر من 25000"

    Scenario: 10- Create New Contract without deleviry fees
    Given I am not logged in
    When I go to Waffy Website
    And  I Enter my Mobile number "568999999"
    And I click on "تسجيل الدخول"
    And I fill The OTP
    And I click on "تأكيد"
    And I fill The Password
    And I click on "تسجيل الدخول"
    Then I should see "المعاملات النشطة"
    When I click on "بدء معاملة جديدة"
    And I fill in item Name
    And I fill in Product description
    And I Attch product photo
    And I click on "متابعة"
    And I fill the itme price
    And I accept terms and condtions
    And I click on "إنشاء المعاملة"
    Then I should see "تم إنشاء المعاملة بنجاح"
    And I should see "انسخ الرابط وشاركه مع عملائك"
    When I click on "متابعة"
    Then I should see "Test Product By Automation"
    And I should see "That is an amazing product"
