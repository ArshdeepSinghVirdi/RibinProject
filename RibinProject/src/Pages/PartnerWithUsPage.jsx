import React from 'react'
import Navbar from '../Components/Navbar'
import BenefitsBusinessSection from '../Components/RibinBusinessPage/BenefitsBusinessSection'
import AnalyticsSection from '../Components/RibinBusinessPage/AnalyticsSection'
import TrustedSection from '../Components/RibinBusinessPage/TrustedSection'
import EmployeeBenefitsSection from '../Components/RibinBusinessPage/EmployeeBenefitsSection'
import FAQsSection from '../Components/RibinBusinessPage/FAQsSection'
import Footer from '../Components/Footer'
import FrontSectionPartner from '../Components/PartnerWithUsPage/FrontSectionPartner'

const PartnerWithUsPage = () => {
    return (
        <div>
            <Navbar />
            <FrontSectionPartner />
            <BenefitsBusinessSection />
            <AnalyticsSection />
            <TrustedSection />
            <EmployeeBenefitsSection />
            <FAQsSection />
            <Footer />
        </div>
    )
}

export default PartnerWithUsPage
