import { Button } from "~/components/ui/button"

interface ContentSectionProps {
  title: string
  description: string
}

export default function ContentSection({ title, description }: ContentSectionProps) {
  return (
    <div className="p-8 bg-muted/30 rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button variant="outline">Learn More</Button>
    </div>
  )
}