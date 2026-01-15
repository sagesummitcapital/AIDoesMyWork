interface WorkflowCardProps {
  title: string
  before: string
  after: string
  tools: string[]
  timeSaved: string
}

export default function WorkflowCard({ title, before, after, tools, timeSaved }: WorkflowCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted mb-1">Before</p>
          <p className="text-foreground/90">{before}</p>
        </div>
        
        <div>
          <p className="text-sm text-muted mb-1">After</p>
          <p className="text-foreground/90">{after}</p>
        </div>
        
        <div>
          <p className="text-sm text-muted mb-1">Tools used</p>
          <p className="text-foreground/90">{tools.join(', ')}</p>
        </div>
        
        <div>
          <p className="text-sm text-muted mb-1">Time saved</p>
          <p className="font-medium">{timeSaved}</p>
        </div>
      </div>
    </div>
  )
}
