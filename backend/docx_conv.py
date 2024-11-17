from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.shared import Pt

# to be completed
def get_docx(text:str):
    doc = Document()
    para = doc.add_paragraph(text)
    para.paragraph_format.line_spacing_rule = WD_LINE_SPACING.ONE_POINT_FIVE
    para.style.font.size = Pt(12)
    para.style.font.name = "Arial"
    doc.save("test.docx")