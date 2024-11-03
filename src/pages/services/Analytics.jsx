import React from 'react'
import Hero from './Hero'
import Desc from './Desc'
import Solutions from './Solutions'
import Your from './Your'

function Analytics() {
    const data =
    {
        title: "Data Analytics and BI",
        icon: "bi bi-bar-chart",
        image:'https://img.freepik.com/premium-photo/analyst-working-data-analysis-bi-dashboard-computer-monitor-business-team-analyzing-financial-data-by-fintech-corporate-office-business-marketing-strategy-planning-trailblazing_31965-202086.jpg?w=1060',
        d2:'Apexion Global Solutions transforms raw data into actionable business insights. Our data analytics and BI services empower your organization to make informed decisions, optimize performance, and gain a competitive edge through data-driven strategies.',
        description: "Transform raw data into actionable insights with Data Analytics and Business Intelligence solutions.",
        heroTitle: "Unlock the Power of Data",
        content: [
          {
            title: "Data Visualization",
            icon: "bi bi-pie-chart-fill",
            description: "Convert complex data into understandable visuals for better decision-making."
          },
          {
            title: "Predictive Analytics",
            icon: "bi bi-graph-up",
            description: "Use predictive models to forecast trends and prepare for future challenges."
          },
          {
            title: "Data Mining",
            icon: "bi bi-search",
            description: "Extract valuable patterns from large datasets to uncover hidden opportunities."
          },
          {
            title: "Big Data Solutions",
            icon: "bi bi-database-fill",
            description: "Process and analyze large data volumes efficiently for valuable insights."
          },
          {
            title: "Real-time Analytics",
            icon: "bi bi-lightning-fill",
            description: "Get immediate insights from data to make real-time business decisions."
          },
          {
            title: "Business Intelligence Tools",
            icon: "bi bi-tools",
            description: "Use BI tools to gain a deeper understanding of business performance."
          }
        ]
      }
  return (
    <section className="services-page">
    <Hero data={data}/>
    <Desc data={data}/>
    <Solutions data={data}/>
    <Your/>

</section>
  )
}

export default Analytics