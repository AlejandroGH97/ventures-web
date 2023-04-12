import { Venture } from '@/libs/types/venture';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Venture[]>
) {
  res.status(200).json(
    [
      {
        id: 1,
        name: 'Viva',
        description:
          'Person outsd bus inj in clsn w nonmtr vehicle nontraf, init',
        category: 'Apparel',
      },
      {
        id: 2,
        name: 'Zoolab',
        description:
          'Nephrotic syndrome w focal and segmental glomerular lesions',
        category: 'Food',
      },
      {
        id: 3,
        name: 'Bitchip',
        description:
          'Contus/lac/hem brainstem w LOC of 30 minutes or less, init',
        category: 'Food',
      },
      {
        id: 4,
        name: 'Cardguard',
        description:
          'Toxic effect of carb monx from unsp source, slf-hrm, sequela',
        category: 'Food',
      },
      {
        id: 5,
        name: 'Wrapsafe',
        description: 'Unspecified fracture of lower end of left ulna',
        category: 'Food',
      },
      {
        id: 6,
        name: 'Prodder',
        description: 'Unsp open wound of unsp thumb w/o damage to nail, subs',
        category: 'Food',
      },
      {
        id: 7,
        name: 'Tempsoft',
        description:
          'Laceration of unsp msl/tnd at ank/ft level, right foot, subs',
        category: 'Sports',
      },
      {
        id: 8,
        name: 'Otcom',
        description: 'Benign neoplasm of unspecified epididymis',
        category: 'Food',
      },
      {
        id: 9,
        name: 'Y-Solowarm',
        description: 'Hypertension secondary to other renal disorders',
        category: 'Apparel',
      },
      {
        id: 10,
        name: 'Cardguard',
        description: 'Other superficial bite of right index finger',
        category: 'Food',
      },
      {
        id: 11,
        name: 'Subin',
        description: 'Laceration of left renal artery',
        category: 'Sports',
      },
      {
        id: 12,
        name: 'Pannier',
        description: 'Other chronic osteomyelitis, right radius and ulna',
        category: 'Food',
      },
      {
        id: 13,
        name: 'Voltsillam',
        description:
          'Occup of hv veh inj in clsn w rail trn/veh nontraf, sequela',
        category: 'Food',
      },
      {
        id: 14,
        name: 'Span',
        description: 'Underdosing of antithrombotic drugs, initial encounter',
        category: 'Sports',
      },
      {
        id: 15,
        name: 'Veribet',
        description:
          'Oth places as the place of occurrence of the external cause',
        category: 'Food',
      },
      {
        id: 16,
        name: 'Bytecard',
        description:
          'Unsp intcrn inj w LOC w death d/t brain inj bf consc, init',
        category: 'Sports',
      },
      {
        id: 17,
        name: 'Asoka',
        description: 'Unspecified fracture of shaft of left fibula, sequela',
        category: 'Apparel',
      },
      {
        id: 18,
        name: 'Domainer',
        description: 'Poisoning by tricyclic antidepressants, accidental',
        category: 'Sports',
      },
      {
        id: 19,
        name: 'Sonair',
        description:
          'Traum rupt of palmar ligmt of finger at MCP/IP jt, sequela',
        category: 'Sports',
      },
      {
        id: 20,
        name: 'Gembucket',
        description: 'Febrile convulsions',
        category: 'Sports',
      },
    ].filter(
      (category: Venture) => category.category === req.query.category as string
    )
  );
}
