<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">
  <xsl:output method="xml" indent="yes" version="1.0" />
  <xsl:template match="/">
    <response>
      <InvestorDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <Title>Mr</Title>
        <TitleDescr>Mr</TitleDescr>
        <Surname>
          People Name 78221
        </Surname>
        <FirstName>First Name 78221</FirstName>
        <InvestorFullName>Mr First Name 78221 People Name 78221</InvestorFullName>
        <ExistingPhysicalAddress/>
        <ExistingPostalAddress/>
        <TelephoneCol>
          <TeleComAddress xmlns="">
            <TeleCommType>MOBILETEL</TeleCommType>
            <TeleCommValue>
              <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='MobileNumber'])"/>
            </TeleCommValue>
          </TeleComAddress>
          <TeleComAddress xmlns="">
            <TeleCommType>FAX</TeleCommType>
            <TeleCommValue>
              <TeleCommValue>
                <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='FaxNumber'])"/>
              </TeleCommValue>
            </TeleCommValue>
          </TeleComAddress>
          <TeleComAddress xmlns="">
            <TeleCommType>HOMETEL</TeleCommType>
            <TeleCommValue>
              <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='HomeTel'])"/>
            </TeleCommValue>
          </TeleComAddress>
          <TeleComAddress xmlns="">
            <TeleCommType>WORKTEL</TeleCommType>
            <TeleCommValue>
              <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='WorkTelNo'])"/>
            </TeleCommValue>
          </TeleComAddress>
        </TelephoneCol>
        <AddressCol>
          <PostalSameAsPhysical xsi:nil="true"/>
          <PhysicalAddressCol>
            <Address xmlns="">
              <AddressType>PHYSICAL</AddressType>
              <Line1>Line_1  78221</Line1>
              <Line2>Line_2  78221</Line2>
              <Line3>Line_3  78221</Line3>
              <Line4/>
              <Code>1459</Code>
              <AddressNumber xsi:nil="true"/>
            </Address>
          </PhysicalAddressCol>
          <PostalAddressCol>
            <Address xmlns="">
              <AddressType>POSTAL</AddressType>
              <Line1>Line_1  78221</Line1>
              <Line2>Line_2  78221</Line2>
              <Line3>Line_3  78221</Line3>
              <Line4/>
              <Code>2010</Code>
              <AddressNumber xsi:nil="true"/>
            </Address>
          </PostalAddressCol>
        </AddressCol>
        <CommunicationMethod>EMAIL</CommunicationMethod>
        <ExistingEmailAddress/>
        <Email>
          <Address xmlns="">
            <AddressType>EMAIL</AddressType>
            <Line1>
              <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='EmailId'])"/>
            </Line1>
            <Code xsi:nil="true"/>
            <AddressNumber xsi:nil="true"/>
          </Address>
        </Email>
        <MethodOfID>IDDOC</MethodOfID>
        <IDNumber>5103295087081</IDNumber>
        <RetirementAge xsi:nil="true"/>
        <RetirementDate/>
        <Gender>Male</Gender>
        <InCommunityOfProperty xsi:nil="true"/>
        <FundOrCompanyName/>
        <RegNumber/>
        <InvestmentType>
          <InvestmentTypes xmlns="">DebitOrder</InvestmentTypes>
          <InvestmentValue xmlns="">false</InvestmentValue>
        </InvestmentType>
        <InvestmentType>
          <InvestmentTypes xmlns="">LumpSum</InvestmentTypes>
          <InvestmentValue xmlns="">false</InvestmentValue>
        </InvestmentType>
        <DateOfBirth>1951-03-29 00:00:00Z</DateOfBirth>
        <MaritalStatus xsi:nil="true"/>
        <MaritalFlag xsi:nil="true"/>
        <IsExistingClient>true</IsExistingClient>
        <ClientNumber>78221</ClientNumber>
        <ContractNumber>205116</ContractNumber>
        <DealNumber>2</DealNumber>
        <ContractNumberDescr>205116</ContractNumberDescr>
        <DealNumberDescr>2</DealNumberDescr>
        <IsRegisteredTaxPayer>false</IsRegisteredTaxPayer>
        <NonSAQualifiesForWithholding xsi:nil="true"/>
        <PerTaxToBeDeducted/>
        <TaxNumber>6126064815</TaxNumber>
        <TaxOffice>People Name 2801</TaxOffice>
        <FSBRegNum/>
        <FinancialYearEndDate/>
        <Designation/>
        <InvestorTelephone/>
        <BrokerageName/>
        <InvestmentNo/>
        <Products>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DealDetails']/*[local-name()='Product']/*[local-name()='id'])"/>
        </Products>
        <ProductsDescr>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DealDetails']/*[local-name()='Product']/*[local-name()='name'])"/>
        </ProductsDescr>
        <DealNo>2</DealNo>
        <ClientAccountNo/>
        <ClientAccountNoDescr/>
        <ChangeOfName>
          <Title>Mr</Title>
          <FirstName>First Name 78221</FirstName>
          <Surname>People Name 78221</Surname>
        </ChangeOfName>
        <TitleType xsi:nil="true"/>
        <EntityStatus/>
        <Country/>
        <OccupationType/>
        <MarketingSource/>
        <AgentRestriction/>
        <AgentType/>
        <Region/>
        <AccountType/>
        <FundNo/>
        <AgentNo/>
        <TotalAmount>500000.00</TotalAmount>
        <AmountCleared/>
        <AmountUncleared/>
        <CertifiedAmount/>
        <EntityType>13</EntityType>
        <CurrentBalance/>
        <PeopleNumber>78221</PeopleNumber>
        <StatementAddress/>
        <StatutoryAddress/>
        <EnterpriseType/>
        <TelWork/>
        <Fax/>
        <TelHome>01130278221</TelHome>
        <Mobile>01130278221</Mobile>
        <TelWorkModified>false</TelWorkModified>
        <TelHomeModified>false</TelHomeModified>
        <TelMobileModified>false</TelMobileModified>
        <TelFaxModified>false</TelFaxModified>
        <EmailModified>false</EmailModified>
        <InitiateFormAttribute>
          <PlatformID xmlns="">2</PlatformID>
          <ProductID xmlns="">19</ProductID>
          <TransactionID xmlns="">14</TransactionID>
          <GroupID xmlns="">5</GroupID>
          <ClientID xmlns=""/>
        </InitiateFormAttribute>
        <STPIndicator>false</STPIndicator>
        <FormCode>PPADDPRE</FormCode>
        <ErrorCode/>
        <NameChange>false</NameChange>
        <TaxDetailsChange>false</TaxDetailsChange>
        <ContactDetailChange>false</ContactDetailChange>
        <AdditionalTaxes xsi:nil="true"/>
        <AdditionalTaxApplicable xsi:nil="true"/>
        <Occupation xsi:nil="true"/>
        <IsAFinancialInstitution xsi:nil="true"/>
        <IsANonFinancialInstitution xsi:nil="true"/>
        <IsNotSpecifiedUSPerson xsi:nil="true"/>
        <IsNewBankingDetailsIndicator>false</IsNewBankingDetailsIndicator>
        <DateOfBirthStr>29/03/1951</DateOfBirthStr>
      </InvestorDetails>
      <SpecialInstructions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <SpecialInstructionApplicable>false</SpecialInstructionApplicable>
        <SpecialInstruction/>
        <InitiateFormAttribute>
          <PlatformID xmlns="">2</PlatformID>
          <ProductID xmlns="">19</ProductID>
          <TransactionID xmlns="">14</TransactionID>
          <GroupID xmlns="">5</GroupID>
          <ClientID xmlns=""/>
        </InitiateFormAttribute>
        <STPIndicator xsi:nil="true"/>
      </SpecialInstructions>
      <InvestmentDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <InvestmentDetailsId>00000000-0000-0000-0000-000000000000</InvestmentDetailsId>
        <SourceOfFundsValue>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='SourceOfFunds']/*[local-name()='source'])"/>
        </SourceOfFundsValue>
        <SourceOfFundsOther>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='SourceOfFunds']/*[local-name()='Other'])"/>
        </SourceOfFundsOther>
        <LumpsumInvestmentApplicable>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='LumpSumDetails']/*[local-name()='IsLumpSum'])"/>
        </LumpsumInvestmentApplicable>
        <PortfolioSource>UserSpecifiedAllocation</PortfolioSource>
        <MandateType/>
        <InvestmentAmount>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='LumpSumDetails']/*[local-name()='InvestmentAmount'])"/>
        </InvestmentAmount>
        <MissedDebitOrder>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='LumpSumDetails']/*[local-name()='MissedDebitOrder'])"/>
        </MissedDebitOrder>
        <SourceOfPayment xsi:nil="true"/>
        <CommunicationMethod/>
        <FromAccountNo/>
        <InvestmentProcess>Addition</InvestmentProcess>
        <MemberNo>78221</MemberNo>
        <MemberNoDescr>Mr First Name 78221 People Name 78221</MemberNoDescr>
        <InvestmentType>
          <InvestmentTypes xmlns="">LumpSum</InvestmentTypes>
          <InvestmentValue xmlns="">true</InvestmentValue>
        </InvestmentType>
        <InvestmentType>
          <InvestmentTypes xmlns="">DebitOrder</InvestmentTypes>
          <InvestmentValue xmlns="">true</InvestmentValue>
        </InvestmentType>
        <InvestmentType>
          <InvestmentTypes xmlns="">DirectDebit</InvestmentTypes>
          <InvestmentValue xmlns="">true</InvestmentValue>
        </InvestmentType>
        <InvestmentType>
          <InvestmentTypes xmlns="">Transfer</InvestmentTypes>
          <InvestmentValue xmlns="">false</InvestmentValue>
        </InvestmentType>
        <SourceFundType>
          <FundName xmlns="">ProvidentFund</FundName>
          <FundValue xmlns="">false</FundValue>
        </SourceFundType>
        <SourceFundType>
          <FundName xmlns="">PensionFund</FundName>
          <FundValue xmlns="">false</FundValue>
        </SourceFundType>
        <SourceFundType>
          <FundName xmlns="">RetirementAnnuity</FundName>
          <FundValue xmlns="">false</FundValue>
        </SourceFundType>
        <NameOfSourceFund/>
        <TransferType>
          <TransferTypeName xmlns="">UnitTransfer</TransferTypeName>
          <TransferTypeValue xmlns="">false</TransferTypeValue>
        </TransferType>
        <PhaseIn>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='PhaseIn']/*[local-name()='IsPhaseIn'])"/>
        </PhaseIn>
        <PhaseInType>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='PhaseIn']/*[local-name()='SelectedPhaseIn'])"/>
        </PhaseInType>
        <NoOfMonth>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='PhaseIn']/*[local-name()='NoOfOccurances'])"/>
        </NoOfMonth>
        <ProductAddingTo>INVRA</ProductAddingTo>
        <ProductAddingToDescr>iSelect Retirement Annuity INVRA</ProductAddingToDescr>
        <ShowNote>0</ShowNote>
        <DebitOrderToFollowSwitch>NA</DebitOrderToFollowSwitch>
        <DistributionToFollowSwitch>NA</DistributionToFollowSwitch>
        <CreateSwitchToNewAccount/>
        <CreateSwitchToNewAccountDescr/>
        <FundDetailCol>
          <FundDetails>
            <SourceFundDetail>
              <SourceFundName/>
              <SourceFundNameDescr/>
              <SourceAmount xsi:nil="true"/>
              <SourcePercentage xsi:nil="true"/>
              <SourceUnits xsi:nil="true"/>
              <FundRandBalance xsi:nil="true"/>
              <FundUnitBalance xsi:nil="true"/>
              <FundUnitPrice xsi:nil="true"/>
              <ParentFundSectionIndex>0</ParentFundSectionIndex>
              <FundNumber xsi:nil="true"/>
            </SourceFundDetail>
            <DestinationFundDetailCol>
              <DestinationFundDetails>
                <DestinationFundDetail>
                  <RetirementAnnuity xsi:nil="true"/>
                  <PensionPreserProvident xsi:nil="true"/>
                  <Section37 xsi:nil="true"/>
                  <Amount>500000.00</Amount>
                  <Percentage xsi:nil="true"/>
                  <Units xsi:nil="true"/>
                  <DebitOrderAmount xsi:nil="true"/>
                  <ParentFundSectionIndex>0</ParentFundSectionIndex>
                  <OnceOffDebitAmount xsi:nil="true"/>
                  <FundNumber xsi:nil="true"/>
                  <SwitchInNewFunds xsi:nil="true"/>
                </DestinationFundDetail>
              </DestinationFundDetails>
              <UTOffshoreFundDetails>

                <xsl:for-each select="(*[local-name()='Additions']/*[local-name()='LumpSumDetails']/*[local-name()='FundDetails'])">
                  <UTOffshoreFundDetail>
                    <FundGroupCode>
                      <xsl:value-of select="(*[local-name()='FundType'])"/>
                    </FundGroupCode>
                    <RetirementAnnuity>false</RetirementAnnuity>
                    <PensionPreserProvident>false</PensionPreserProvident>
                    <Section37>false</Section37>
                    <Amount>50000.0000</Amount>
                    <Percentage>10.00</Percentage>
                    <Units xsi:nil="true"/>
                    <DebitOrderAmount xsi:nil="true"/>
                    <ParentFundSectionIndex>0</ParentFundSectionIndex>
                    <OnceOffDebitAmount>0</OnceOffDebitAmount>
                    <DestinationFundNameDescr>
                      <xsl:value-of select="(*[local-name()='FundName'])"/>
                    </DestinationFundNameDescr>
                    <DestinationAccountNumber>-1</DestinationAccountNumber>
                    <FundNumber>
                      <xsl:value-of select="(*[local-name()='FundNumber'])"/>
                    </FundNumber>
                    <SwitchInNewFunds>false</SwitchInNewFunds>
                  </UTOffshoreFundDetail>
                </xsl:for-each>
              </UTOffshoreFundDetails>
            </DestinationFundDetailCol>
          </FundDetails>
        </FundDetailCol>
        <AnnuityFundingToFollowSwitch>NA</AnnuityFundingToFollowSwitch>
        <WithdrawalsToFollowSwitch xsi:nil="true"/>
        <PhaseInToFollowSwitch xsi:nil="true"/>
        <TotalAmount>500000.00</TotalAmount>
        <AmountCleared>0</AmountCleared>
        <AmountUncleared>0</AmountUncleared>
        <CertifiedAmount>0</CertifiedAmount>
        <CurrentInstrumentBalance>0</CurrentInstrumentBalance>
        <LumpSum>1</LumpSum>
        <DebitOrder>1</DebitOrder>
        <DirectDebit>1</DirectDebit>
        <DestinationFundPercentTotal>100</DestinationFundPercentTotal>
        <DestiCountIndicator/>
        <SourceCountIndicator/>
        <InitiateFormAttribute>
          <PlatformID xmlns="">2</PlatformID>
          <ProductID xmlns="">19</ProductID>
          <TransactionID xmlns="">14</TransactionID>
          <GroupID xmlns="">5</GroupID>
          <ClientID xmlns=""/>
        </InitiateFormAttribute>
        <STPIndicator>false</STPIndicator>
        <ExpireModelPortfolio>false</ExpireModelPortfolio>
        <InvestorFullName>Mr First Name 78221 People Name 78221</InvestorFullName>
        <ClientNumber>78221</ClientNumber>
        <Products>INVRA</Products>
        <ContractNumber>205116</ContractNumber>
        <WithdrawalsPreviousNomination/>
        <NotApplicable>false</NotApplicable>
        <MethodOfID/>
        <IDNumber>5103295087081</IDNumber>
        <Surname>People Name 78221</Surname>
        <FirstName>First Name 78221</FirstName>
        <FormCode xsi:type="xsd:string">PPADDPRE</FormCode>
        <ErrorCode xsi:type="xsd:string"/>
        <OnceOffDebitApplicable>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='SpecifyOnceOffDebit'])"/>
        </OnceOffDebitApplicable>
      </InvestmentDetails>
      <DebitOrderInstruction xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <DebitOrderInvestmentApplicable>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='SpecifyDebitOrderInc'])"/>
        </DebitOrderInvestmentApplicable>
        <PortfolioSource>UserSpecifiedAllocation</PortfolioSource>
        <BankDetails>
          <ExistingBankDetails>
          </ExistingBankDetails>
          <BankName>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='BankNumber'])"/>
          </BankName>
          <BankNameDescr>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='BankName'])"/>
          </BankNameDescr>
          <BranchNameAndCode>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='BranchName'])"/>,<xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='BranchCode'])"/>
          </BranchNameAndCode>
          <BranchNameAndCodeDescr>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='BranchName'])"/>,<xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='BranchCode'])"/>
          </BranchNameAndCodeDescr>
          <AccountHolderName>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='AccountHolderName'])"/>
          </AccountHolderName>
          <AccountNumber>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='AccountNumber'])"/>
          </AccountNumber>
          <AccountType>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='AccountTypeName'])"/>
          </AccountType>
          <AccountTypeDescr>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='AccountTypeName'])"/>
          </AccountTypeDescr>
          <ThirdPartyIndicator>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='ThirdPartyBankDetails'])"/>
          </ThirdPartyIndicator>
          <ControlId>0</ControlId>
        </BankDetails>
        <ExistingDebitOrder/>
        <Authority>INVESTOR</Authority>
        <DayOfMonth xsi:nil="true"/>
        <Month>02</Month>
        <Year>2017</Year>
        <EscalationType>PERCENT</EscalationType>
        <EscalationApplicable>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='Escalation'])"/>
        </EscalationApplicable>
        <EscalationPercent>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='EscalationPecentage'])"/>
        </EscalationPercent>
        <EscalationPercentOther>0</EscalationPercentOther>
        <EscalationAmount>0</EscalationAmount>
        <Amount>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='Amount'])"/>
        </Amount>
        <AmountInWords/>
        <CommencementDate xsi:nil="true"/>
        <Frequency>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='DebitOrderFrequency'])"/>
        </Frequency>
        <FrequencyDescr>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='DebitOrderFrequency'])"/>
        </FrequencyDescr>
        <EscalationDate>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='EscalationDate'])"/>
        </EscalationDate>
        <ShowNote>0</ShowNote>
        <CancelDebitOrder>false</CancelDebitOrder>
        <LastCollectionDate xsi:nil="true"/>
        <ChangeDebitOrder>false</ChangeDebitOrder>
        <TotalNewAmount xsi:nil="true"/>
        <ReinstateDebitOrder>false</ReinstateDebitOrder>
        <FirstCollectionDate xsi:nil="true"/>
        <DebitOrderEscalation>false</DebitOrderEscalation>
        <PercentPerAnnum xsi:nil="true"/>
        <CancelDebitOrderEscalation>false</CancelDebitOrderEscalation>
        <ChangeDebitOrderEscalation>false</ChangeDebitOrderEscalation>
        <NewPercentPerAnnum xsi:nil="true"/>
        <InvestmentAllocationCol>
          <xsl:for-each select="(*[local-name()='Additions']/*[local-name()='DebitOrderDetails']/*[local-name()='DebitOrderInstruments'])">

            <InvestmentInstrumentDetails>
              <FundGroupCode>
                <xsl:value-of select="(*[local-name()='FundType'])"/>
              </FundGroupCode>
              <InvestmentInstrumentName>
                <xsl:value-of select="(*[local-name()='FundName'])"/>
              </InvestmentInstrumentName>
              <InvestmentInstrumentNameDescr>
                <xsl:value-of select="(*[local-name()='FundName'])"/>
              </InvestmentInstrumentNameDescr>
              <PercentAllocation>
                <xsl:value-of select="(*[local-name()='Allocation'])"/>
              </PercentAllocation>
              <InstrumentNumber>
                <xsl:value-of select="(*[local-name()='FundName'])"/>
              </InstrumentNumber>
            </InvestmentInstrumentDetails>
          </xsl:for-each>

        </InvestmentAllocationCol>
        <DebitOrderBankingDetails/>
        <DebitOrderNumber/>
        <AgentNo/>
        <InitiateFormAttribute>
          <PlatformID xmlns="">2</PlatformID>
          <ProductID xmlns="">19</ProductID>
          <TransactionID xmlns="">14</TransactionID>
          <GroupID xmlns="">5</GroupID>
          <ClientID xmlns=""/>
        </InitiateFormAttribute>
        <SearchValue/>
        <STPIndicator>false</STPIndicator>
        <ErrorCode/>
        <FormCode>PPADDPRE</FormCode>
        <AmountExt>20 000.00</AmountExt>
        <UseExistingBankDetails>Y</UseExistingBankDetails>
      </DebitOrderInstruction>
      <OnceOffDebitInstruction xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <OnceOffDebitApplicable>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='SpecifyOnceOffDebit'])"/>
        </OnceOffDebitApplicable>
        <Amount>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='Amount'])"/>
        </Amount>
        <AmountInWords/>
        <BankDetails>
          <ExistingBankDetails>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='UseExistingBank'])"/>
          </ExistingBankDetails>
          <BankName>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='BankNumber'])"/>
          </BankName>
          <BankNameDescr>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='BankName'])"/>
          </BankNameDescr>
          <BranchNameAndCode>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='BranchName'])"/>, <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='BranchCode'])"/>
          </BranchNameAndCode>
          <BranchNameAndCodeDescr>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='BranchName'])"/>, <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='BranchCode'])"/>
          </BranchNameAndCodeDescr>
          <AccountHolderName>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='AccountHolderName'])"/>
          </AccountHolderName>
          <AccountNumber>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='AccountNumber'])"/>
          </AccountNumber>
          <AccountType>C</AccountType>
          <AccountTypeDescr>
            <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='OnceOffDebit']/*[local-name()='AccountTypeName'])"/>
          </AccountTypeDescr>
          <ControlId>0</ControlId>
        </BankDetails>
        <ShowNote>0</ShowNote>
        <TitleType/>
        <InitiateFormAttribute>
          <PlatformID xmlns="">2</PlatformID>
          <ProductID xmlns="">19</ProductID>
          <TransactionID xmlns="">14</TransactionID>
          <GroupID xmlns="">5</GroupID>
          <ClientID xmlns=""/>
        </InitiateFormAttribute>
        <SearchValue/>
        <STPIndicator xsi:nil="true"/>
        <UseExistingBankDetails>Y</UseExistingBankDetails>
      </OnceOffDebitInstruction>
      <FinancialAdvisorDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <InvestecSpecialIncomeFundVal>0</InvestecSpecialIncomeFundVal>
        <FixedIncomeFundsVal>0.00</FixedIncomeFundsVal>
        <AnalyticsFundsVal>0.00</AnalyticsFundsVal>
        <AllOtherInvestecFundVal>0.00</AllOtherInvestecFundVal>
        <InvestecMoneyMarketFundVal>0.00</InvestecMoneyMarketFundVal>
        <IFANotApplicable>false</IFANotApplicable>
        <AlternateContactApplicable>false</AlternateContactApplicable>
        <SignedAt/>
        <Day/>
        <Month/>
        <Year/>
        <BrokerageName>People Name 10048</BrokerageName>
        <AdvisorName>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='BrokerDetails']/*[local-name()='BrokerName']/*[local-name()='Name'])"/>
        </AdvisorName>
        <AdvisorCode>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='BrokerDetails']/*[local-name()='BrokerName']/*[local-name()='People_Number'])"/>
        </AdvisorCode>
        <InvestecMoneyMarketFund>0.00</InvestecMoneyMarketFund>
        <FixedIncomeFunds>0.00</FixedIncomeFunds>
        <AllOtherInvestecFund>0.00</AllOtherInvestecFund>
        <AnalyticsFunds>0.00</AnalyticsFunds>
        <FinAdvisorFeeFixedIncome xsi:nil="true"/>
        <FinAdvisorFeeOtherInvestec xsi:nil="true"/>
        <FinAdvisorFeeAnalytics xsi:nil="true"/>
        <BrokerageCode>10048</BrokerageCode>
        <TelephoneCol>
          <TeleComAddress xmlns="">
            <TeleCommType>WORKTEL</TeleCommType>
            <TeleCommValue>011302200</TeleCommValue>
          </TeleComAddress>
          <TeleComAddress xmlns="">
            <TeleCommType>FAXTEL</TeleCommType>
            <TeleCommValue>011302200</TeleCommValue>
          </TeleComAddress>
        </TelephoneCol>
        <ExistingEmailAddress/>
        <Email>
          <Address xmlns="">
            <AddressType>EMAIL</AddressType>
            <Line1>200@silica.net</Line1>
            <Code xsi:nil="true"/>
            <AddressNumber xsi:nil="true"/>
          </Address>
        </Email>
        <AlternateContactName/>
        <AlternateTelephoneCol xsi:nil="true"/>
        <ExistingAlternateEmailAddress/>
        <InitialRedFirstPremium xsi:nil="true"/>
        <InitialRedSubsPremium xsi:nil="true"/>
        <FinAdvisorFee xsi:nil="true"/>
        <FinAdvisorDOFee xsi:nil="true"/>
        <InitialFeeFirstPremium xsi:nil="true"/>
        <InitialFeeSubsPremium xsi:nil="true"/>
        <AnnualFee xsi:nil="true"/>
        <IsInvestecIndividualisationProgram>false</IsInvestecIndividualisationProgram>
        <IndividualisationEmployer/>
        <Telephone>0</Telephone>
        <Fax>0</Fax>
        <InitiateFormAttribute>
          <PlatformID>2</PlatformID>
          <ProductID>19</ProductID>
          <TransactionID>14</TransactionID>
          <GroupID>5</GroupID>
        </InitiateFormAttribute>
        <STPIndicator>false</STPIndicator>
        <ErrorCode/>
        <FormCode>PPADDPRE</FormCode>
        <InitialRedFirstRebate xsi:nil="true"/>
        <InitialRedSubsRebate xsi:nil="true"/>
        <AnnualFeeRed xsi:nil="true"/>
        <AnnualFeeRedRebate xsi:nil="true"/>
        <AnnualFSFeeRebate xsi:nil="true"/>
        <AnnualFeeSharePortfolio xsi:nil="true"/>
      </FinancialAdvisorDetails>
      <FEES xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <InitialFees>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='BrokerDetails']/*[local-name()='InitialFee'])"/>
        </InitialFees>
        <InitialDOFees>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='BrokerDetails']/*[local-name()='DebitOrderFee'])"/>
        </InitialDOFees>
        <AnnualFees>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='BrokerDetails']/*[local-name()='AnnualFee'])"/>
        </AnnualFees>
        <AnnualFeeSharePortfolio>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='BrokerDetails']/*[local-name()='AnnualFeeSF'])"/>
        </AnnualFeeSharePortfolio>
        <AnnualFSFeeRebate>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='BrokerDetails']/*[local-name()='AnnualFeeRebate'])"/>
        </AnnualFSFeeRebate>
        <InitiateFormAttribute>
          <PlatformID xmlns=""></PlatformID>
          <ProductID xmlns=""></ProductID>
          <TransactionID xmlns=""></TransactionID>
          <GroupID xmlns=""></GroupID>
          <ClientID xmlns=""/>
        </InitiateFormAttribute>
      </FEES>
      <BankDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <ExistingBankDetails/>
        <BankName>901</BankName>
        <BankNameDescr>Standard Bank of South Africa Limited</BankNameDescr>
        <BranchNameAndCode>007205</BranchNameAndCode>
        <BranchNameAndCodeDescr>KILLARNEY (JHB)</BranchNameAndCodeDescr>
        <AccountHolderName>Investec Linked Retirement Annuity</AccountHolderName>
        <AccountNumber>200277634</AccountNumber>
        <AccountType>C</AccountType>
        <AccountTypeDescr>CHEQUE</AccountTypeDescr>
        <ThirdPartyIndicator/>
      </BankDetails>
      <SelectedDealsDetails xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://Silica.Net/Schemas/Canonical/IAM.WebIndexing">
        <ParentInstructionId>222079</ParentInstructionId>
        <SelectedDealCol>
          <SelectedDeal>
            <DealDetails>0</DealDetails>
            <DealNo>
              <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DealDetails']/*[local-name()='DealNumber'])"/>
            </DealNo>
          </SelectedDeal>
        </SelectedDealCol>
        <DealSelectionEnumVal>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='DealDetails']/*[local-name()='AddExistingDeal'])"/>
        </DealSelectionEnumVal>
        <ContractNumber>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='ContractNumber'])"/>
        </ContractNumber>
        <AwdNumber>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='AWDNumber'])"/>
        </AwdNumber>
        <ReceivedDate>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='ReceivedDate'])"/>
        </ReceivedDate>
        <ReceivedTime>
          <xsl:value-of select="(*[local-name()='Additions']/*[local-name()='ContractDetails']/*[local-name()='ReceivedTime'])"/>
        </ReceivedTime>
        <ContractInfo>78221,200,205116</ContractInfo>
      </SelectedDealsDetails>
    </response>

  </xsl:template>
</xsl:stylesheet>

