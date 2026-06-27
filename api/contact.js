export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, stage, message } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2025-09-03',
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Name: {
            title: [{ text: { content: name } }],
          },
          Email: {
            email: email,
          },
          Company: {
            rich_text: [{ text: { content: company || '' } }],
          },
          Stage: {
            select: { name: stage || 'Early Stage' },
          },
          Message: {
            rich_text: [{ text: { content: message || '' } }],
          },
        },
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Notion error:', error)
      return res.status(500).json({ error: 'Failed to save to Notion' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Server error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}