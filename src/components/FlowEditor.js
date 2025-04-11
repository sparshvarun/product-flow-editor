import React, { useCallback, useEffect } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background
} from '@xyflow/react';
import ProductNode from './ProductNode';
import './FlowEditor.css';

const nodeTypes = { productNode: ProductNode };

const FlowEditor = ({ selectedProduct }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

 
  useEffect(() => {
    if (selectedProduct) {
      setNodes(prevNodes => {
        const newId = prevNodes.length + 1;
        return [
          ...prevNodes,
          {
            id: `node-${newId}`,
            type: 'productNode',
            position: { 
              x: Math.random() * 500,  
              y: Math.random() * 500
            },
            data: { product: selectedProduct },
            draggable: true
          }
        ];
      });
    }
  }, [selectedProduct, setNodes]);

  
  const onConnect = useCallback(
    params => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="flow-editor">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        panOnScroll
        panOnDrag={[1, 2]}  
        selectionOnDrag
        style={{
          width: '100%',
          height: '100%',
          minHeight: '500px'
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowEditor;
