import { Record } from '../model/Record'

export const getLatestData = async (req: any, res: any) => {
  const data: Record = await Record.findOne({
    order: [['createdAt', 'DESC']],
  })
  if (!data) {
    return res.status(500).json({
      message: 'Server Error',
    })
  }
  return res.status(200).json({
    data: JSON.parse(data.record),
  })
}
