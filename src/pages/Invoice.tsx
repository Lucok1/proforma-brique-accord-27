
import React from 'react';

const Invoice = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Pro Forma Invoice */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Seydou Zidouemba</h2>
              <p className="text-gray-600">Développeur Web & Consultant Digital</p>
              <p className="text-gray-600">Lomé, Togo</p>
              <p className="text-gray-600">📞 +228 71303662 (WhatsApp) / +228 91511366</p>
              <p className="text-gray-600">📧 seydougsm1@gmail.com</p>
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-gray-900">Facture Pro Forma</h1>
              <p className="text-gray-600">N° : 2025-001</p>
              <p className="text-gray-600">Date : 19/04/2025</p>
            </div>
          </div>

          <div className="border-t border-gray-200 py-4">
            <p className="text-gray-600">À :</p>
            <p className="font-semibold">Cornerstone Briques</p>
            <p className="text-gray-600 mt-4">Durée de prestation : 3 mois</p>
          </div>

          <div className="mt-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="text-left text-gray-900 font-semibold">Description</th>
                  <th className="text-right text-gray-900 font-semibold">Montant (FCFA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 text-gray-600">Conception du site web</td>
                  <td className="py-4 text-right text-gray-900">310 000</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600">Solution de gestion de l'usine</td>
                  <td className="py-4 text-right text-gray-600">Inclus</td>
                </tr>
                <tr>
                  <td className="py-4 text-gray-600">Gestion et marketing des réseaux sociaux</td>
                  <td className="py-4 text-right text-gray-600">Inclus</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="pt-6 text-right font-bold">Montant total :</td>
                  <td className="pt-6 text-right font-bold">310 000 FCFA</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-8 text-gray-600">
            <p>Modalités de paiement : Paiement en une fois</p>
            <p>Validité de l'offre : 30 jours</p>
          </div>
        </div>

        {/* Engagement Letter */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lettre d'engagement</h2>
          
          <p className="mb-4">À l'attention de Cornerstone Briques</p>
          
          <p className="font-semibold mb-4">Objet : Engagement de prestation</p>

          <div className="space-y-4 text-gray-600">
            <p>
              Moi, Seydou Zidouemba, développeur web freelance, m'engage à réaliser la prestation suivante
              pour Cornerstone Briques, comprenant :
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>La conception du site web de l'entreprise</li>
              <li>La mise en place d'une solution de gestion interne</li>
              <li>La gestion et le marketing des pages sur les réseaux sociaux</li>
            </ul>

            <p>
              La durée de cet engagement est fixée à trois (03) mois, pour un montant total de 310 000 FCFA,
              payable selon les modalités convenues.
            </p>

            <p>
              Je m'engage à fournir un travail professionnel et à respecter les délais impartis.
              En tant que témoin de cet engagement, Mr WALIOU ADEKU atteste de la validité de cet accord.
            </p>

            <p>Fait à Lomé, le 19/04/2025</p>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <p className="font-semibold">Signature du prestataire :</p>
                <p>Seydou Zidouemba</p>
              </div>
              <div>
                <p className="font-semibold">Signature du témoin :</p>
                <p>Mr WALIOU ADEKU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
