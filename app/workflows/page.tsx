import Section from '@/components/Section'
import WorkflowCard from '@/components/WorkflowCard'
import CTAButton from '@/components/CTAButton'

export default function Workflows() {
  const workflows = [
    {
      title: 'Lead intake and qualification',
      before: 'Sales team manually reviews each lead form submission, researches the company, and drafts personalized follow-up emails. Takes 15-20 minutes per lead.',
      after: 'System automatically enriches lead data, scores qualification criteria, and generates draft follow-up email. Sales reviews and sends in 2 minutes.',
      tools: ['CRM', 'Email', 'Data enrichment API'],
      timeSaved: '10-15 hours/week'
    },
    {
      title: 'Customer support triage',
      before: 'Support team reads every incoming ticket, categorizes it, checks knowledge base, and routes to correct team member. First response takes 2-4 hours.',
      after: 'Tickets are auto-categorized, matched against solutions, and routed instantly. Draft responses ready for agent review. First response in under 30 minutes.',
      tools: ['Support platform', 'Knowledge base', 'Routing system'],
      timeSaved: '8-12 hours/week'
    },
    {
      title: 'Invoice processing',
      before: 'Finance team receives invoices via email, manually extracts data, enters into accounting system, and files documents. 10-15 minutes per invoice.',
      after: 'Invoices are automatically parsed, data extracted and validated, entered into system, and filed. Team reviews exceptions only.',
      tools: ['Email', 'Accounting software', 'Document storage'],
      timeSaved: '6-10 hours/week'
    },
    {
      title: 'Weekly reporting',
      before: 'Manager pulls data from 5 different tools, copies into spreadsheet, calculates metrics, formats report, and emails to team. Takes 3-4 hours every Monday.',
      after: 'Report auto-generates from connected data sources, calculates all metrics, formats cleanly, and sends on schedule. Manager reviews in 15 minutes.',
      tools: ['Analytics platforms', 'Spreadsheets', 'Email'],
      timeSaved: '12-15 hours/month'
    },
    {
      title: 'Meeting notes and action items',
      before: 'Team members take notes during meetings, then manually write up summary, extract action items, and send follow-up emails. Takes 30-45 minutes per meeting.',
      after: 'System transcribes meeting, identifies key decisions and action items, generates summary, and sends formatted follow-up automatically.',
      tools: ['Video platform', 'Project management', 'Email'],
      timeSaved: '5-8 hours/week'
    },
    {
      title: 'Expense report review',
      before: 'Finance team reviews each expense submission, checks policy compliance, verifies receipts, and manually approves or rejects. 5-10 minutes per report.',
      after: 'System validates receipts, checks policy rules automatically, flags violations, and routes standard approvals. Team handles exceptions only.',
      tools: ['Expense platform', 'Receipt scanning', 'Approval workflow'],
      timeSaved: '4-7 hours/week'
    },
    {
      title: 'Client onboarding documents',
      before: 'Team manually creates customized contracts, proposals, and onboarding docs for each new client. Lots of copy-paste and formatting. Takes 2-3 hours.',
      after: 'Documents auto-generate from client intake data, populate all fields correctly, format professionally, and route for signature. Review in 15 minutes.',
      tools: ['CRM', 'Document automation', 'E-signature'],
      timeSaved: '8-12 hours/week'
    },
    {
      title: 'Social media content review',
      before: 'Marketing manager reviews every social post draft, checks brand guidelines, suggests edits, and manually schedules approved posts. 20-30 minutes per post.',
      after: 'System checks posts against brand guidelines, flags issues, suggests improvements, and queues approved content automatically. Manager spot-checks.',
      tools: ['Social scheduling', 'Brand guidelines', 'Approval workflow'],
      timeSaved: '6-10 hours/week'
    }
  ]

  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Examples of workflows we implement
          </h1>
          <p className="text-xl text-foreground/80">
            If your team touches the same task every day, it's probably automatable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {workflows.map((workflow, index) => (
            <WorkflowCard key={index} {...workflow} />
          ))}
        </div>
      </Section>

      <Section className="bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get a free workflow audit
          </h2>
          <CTAButton href="/book">
            Free Workflow Audit
          </CTAButton>
        </div>
      </Section>
    </main>
  )
}
