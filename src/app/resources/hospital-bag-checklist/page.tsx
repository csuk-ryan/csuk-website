'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { CheckCircle, Package, Download, Printer, Baby, User, Heart, Plus, Trash2, Edit3 } from 'lucide-react'

const metadata: Metadata = {
  title: 'Hospital Bag Checklist Generator | C-Section Essentials | CSUK',
  description: 'Create your personalized hospital bag checklist for c-section birth. Expert recommendations tailored to your specific needs and preferences.',
}

export default function HospitalBagChecklistPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['essentials'])
  const [customItems, setCustomItems] = useState<string[]>([])
  const [newCustomItem, setNewCustomItem] = useState('')
  const [editingItem, setEditingItem] = useState<number | null>(null)
  const [editText, setEditText] = useState('')
  const [deliveryType, setDeliveryType] = useState<string>('planned')
  const [stayDuration, setStayDuration] = useState<string>('2-3-days')

  const checklistCategories = {
    essentials: {
      name: 'Birth Essentials',
      icon: <Heart className="h-5 w-5" />,
      description: 'Must-have items for your c-section birth',
      items: [
        'Hospital appointment letters and birth plan',
        'ID and insurance documents',
        'Maternity notes and pregnancy records',
        'Phone charger and portable battery',
        'Comfortable nightgown or oversized button-up shirts',
        'Well-fitting nursing bras (2-3)',
        'Comfortable, disposable underwear',
        'Maternity pads (heavy flow)',
        'Toiletries (travel-sized)',
        'Lip balm and moisturizer',
        'Hair ties and headband',
        'Slippers with good grip'
      ]
    },
    comfort: {
      name: 'Comfort & Recovery',
      icon: <User className="h-5 w-5" />,
      description: 'Items to help with comfort during recovery',
      items: [
        'Extra pillows for support',
        'Comfortable dressing gown',
        'V-shaped pillow for breastfeeding',
        'Belly band or compression garment',
        'Comfortable going-home outfit (maternity size)',
        'Entertainment (books, tablet, magazines)',
        'Eye mask and earplugs',
        'Comfortable blanket from home',
        'Snacks for after birth',
        'Thermal socks',
        'Back support cushion'
      ]
    },
    baby: {
      name: 'Baby Essentials',
      icon: <Baby className="h-5 w-5" />,
      description: 'Everything your newborn will need',
      items: [
        'Newborn and 0-3 month outfits',
        'Going-home outfit for baby',
        'Baby blankets (2-3)',
        'Newborn nappies',
        'Baby wipes',
        'Muslins for feeding',
        'Baby hat and mittens',
        'Car seat (properly installed)',
        'Dummy/pacifier (if planning to use)',
        'Baby socks and booties',
        'Swaddle blankets'
      ]
    },
    feeding: {
      name: 'Feeding Supplies',
      icon: <Package className="h-5 w-5" />,
      description: 'Breastfeeding and bottle feeding essentials',
      items: [
        'Nipple cream (lanolin-based)',
        'Breast pads (disposable and reusable)',
        'Bottles and teats (just in case)',
        'Formula (small amount as backup)',
        'Sterilizing tablets',
        'Breastfeeding pillow',
        'Water bottle with straw',
        'Healthy snacks for energy',
        'Breast pump (if planning to pump)',
        'Milk storage bags',
        'Burp cloths'
      ]
    },
    partner: {
      name: 'Partner Essentials',
      icon: <Heart className="h-5 w-5" />,
      description: 'Items for your birth partner',
      items: [
        'Change of clothes',
        'Toiletries',
        'Phone charger',
        'Snacks and drinks',
        'Pillow and blanket',
        'Camera/video camera',
        'Entertainment',
        'Comfortable shoes',
        'Cash for parking/vending machines',
        'Contact list for announcements',
        'Energy drinks or coffee'
      ]
    }
  }

  const toggleCategory = (category: string) => {
    if (category === 'essentials') return // Always keep essentials
    
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const addCustomItem = () => {
    if (newCustomItem.trim()) {
      setCustomItems([...customItems, newCustomItem.trim()])
      setNewCustomItem('')
    }
  }

  const removeCustomItem = (index: number) => {
    setCustomItems(customItems.filter((_, i) => i !== index))
  }

  const startEditing = (index: number, text: string) => {
    setEditingItem(index)
    setEditText(text)
  }

  const saveEdit = () => {
    if (editingItem !== null && editText.trim()) {
      const newItems = [...customItems]
      newItems[editingItem] = editText.trim()
      setCustomItems(newItems)
      setEditingItem(null)
      setEditText('')
    }
  }

  const cancelEdit = () => {
    setEditingItem(null)
    setEditText('')
  }

  const generateChecklist = () => {
    let allItems: { category: string; items: string[] }[] = []
    
    selectedCategories.forEach(categoryKey => {
      if (checklistCategories[categoryKey as keyof typeof checklistCategories]) {
        allItems.push({
          category: checklistCategories[categoryKey as keyof typeof checklistCategories].name,
          items: checklistCategories[categoryKey as keyof typeof checklistCategories].items
        })
      }
    })

    if (customItems.length > 0) {
      allItems.push({
        category: 'Your Custom Items',
        items: customItems
      })
    }

    return allItems
  }

  const printChecklist = () => {
    window.print()
  }

  const downloadChecklist = () => {
    const checklist = generateChecklist()
    let content = `Hospital Bag Checklist for C-Section Birth\n`
    content += `Generated by CSUK - C-Section UK\n\n`
    content += `Delivery Type: ${deliveryType === 'planned' ? 'Planned C-Section' : 'Emergency C-Section'}\n`
    content += `Expected Stay: ${stayDuration.replace('-', ' ')}\n\n`
    
    checklist.forEach(category => {
      content += `${category.category}:\n`
      category.items.forEach(item => {
        content += `☐ ${item}\n`
      })
      content += '\n'
    })
    
    content += `\nGenerated at: ${new Date().toLocaleDateString()}\n`
    content += `For more c-section support: https://csectionuk.com`

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'c-section-hospital-bag-checklist.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const totalItems = generateChecklist().reduce((total, category) => total + category.items.length, 0)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Hospital Bag Checklist Generator</h1>
            <p className="text-xl leading-relaxed mb-8">
              Create your personalized hospital bag checklist for your c-section birth. 
              Expert recommendations tailored to your specific needs and stay duration.
            </p>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium inline-block">
              <Package className="h-4 w-4 mr-2 inline" />
              Free Checklist Generator
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Customize Your Checklist</h2>
              
              {/* Delivery Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Type of C-Section</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="planned"
                      checked={deliveryType === 'planned'}
                      onChange={(e) => setDeliveryType(e.target.value)}
                      className="mr-3"
                    />
                    <span>Planned C-Section</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="emergency"
                      checked={deliveryType === 'emergency'}
                      onChange={(e) => setDeliveryType(e.target.value)}
                      className="mr-3"
                    />
                    <span>Emergency C-Section</span>
                  </label>
                </div>
              </div>

              {/* Stay Duration */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Expected Hospital Stay</label>
                <select
                  value={stayDuration}
                  onChange={(e) => setStayDuration(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                >
                  <option value="1-2-days">1-2 days</option>
                  <option value="2-3-days">2-3 days</option>
                  <option value="3-5-days">3-5 days</option>
                  <option value="5+-days">5+ days</option>
                </select>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Include Categories</label>
                <div className="space-y-3">
                  {Object.entries(checklistCategories).map(([key, category]) => (
                    <label key={key} className="flex items-start">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(key)}
                        onChange={() => toggleCategory(key)}
                        disabled={key === 'essentials'}
                        className="mt-1 mr-3"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          {category.icon}
                          <span className="font-medium ml-2">{category.name}</span>
                          {key === 'essentials' && (
                            <span className="ml-2 text-xs bg-navy text-white px-2 py-1 rounded-full">Required</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-navy mb-2">Checklist Summary</h3>
                <div className="text-sm text-gray-600">
                  <div>Categories: {selectedCategories.length}</div>
                  <div>Total Items: {totalItems}</div>
                  <div>Custom Items: {customItems.length}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist Content */}
          <div className="lg:col-span-2">
            
            {/* Custom Items Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-semibold text-navy mb-4 flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add Custom Items
              </h3>
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  value={newCustomItem}
                  onChange={(e) => setNewCustomItem(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
                  placeholder="Add your own item..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy focus:border-navy"
                />
                <button
                  onClick={addCustomItem}
                  className="bg-navy text-white px-4 py-2 rounded-md font-semibold hover:bg-navy-light transition-colors"
                >
                  Add
                </button>
              </div>
              
              {customItems.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Your Custom Items:</h4>
                  {customItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                      {editingItem === index ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                          />
                          <button
                            onClick={saveEdit}
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-gray-600 hover:text-gray-700"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <>
                          <span className="flex-1">{item}</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => startEditing(index, item)}
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => removeCustomItem(index)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Generated Checklist */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8" id="checklist-content">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-navy">Your Hospital Bag Checklist</h3>
                <div className="flex gap-3">
                  <button
                    onClick={printChecklist}
                    className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
                  >
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </button>
                  <button
                    onClick={downloadChecklist}
                    className="flex items-center bg-navy text-white px-4 py-2 rounded-md font-medium hover:bg-navy-light transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>

              <div className="grid gap-8">
                {generateChecklist().map((category, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-navy mb-4 border-b border-gray-200 pb-2">
                      {category.category}
                    </h4>
                    <div className="grid gap-3">
                      {category.items.map((item, itemIndex) => (
                        <label key={itemIndex} className="flex items-start cursor-pointer group">
                          <input
                            type="checkbox"
                            className="mt-1 mr-3 rounded border-gray-300 text-navy focus:ring-navy"
                          />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                Generated by CSUK - C-Section UK | {new Date().toLocaleDateString()}
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-navy mb-4">Packing Tips for C-Section Birth</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Pack your bag by 35-36 weeks, even if you're having a planned c-section</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Choose front-opening nightgowns and clothes for easier access after surgery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Pack extra maternity pads - you'll need more than you think</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Bring comfortable slippers with good grip for walking after surgery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Don't forget your phone charger - you'll want to share those first photos!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #checklist-content, #checklist-content * {
            visibility: visible;
          }
          #checklist-content {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  )
}