from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.shared import Pt

# to be completed
def generate_resume(name:str, contacts, input):
    doc = Document()
    for i in range(1, 32):
        para = doc.add_paragraph(str(i))
        pformat = para.paragraph_format
        pstyle = para.style
        pformat.alignment = WD_ALIGN_PARAGRAPH.LEFT
        pformat.line_spacing_rule = WD_LINE_SPACING.ONE_POINT_FIVE
        pformat.space_after = Pt(0)
        pstyle.font.name = "Arial"
        pstyle.font.size = Pt(12)
    doc.save("test.docx")